import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Autocomplete, TextField } from "@mui/material";
import { orgState, orgList } from "../Stores/userStates";
import { orgVal } from "../Stores/validateStates";

export function OrgAuto() {
  const [orgs, setOrgs] = useRecoilState(orgList);
  const [curOrg, setCurOrg] = useRecoilState(orgState);
  const [val, setVal] = useRecoilState(orgVal);

  useEffect(() => {
    let ignore = false;
    fetch(new URL("https://storage.googleapis.com/example-org-names/org.txt"))
      .then((res) => res.text())
      .then((data) => {
        if (!ignore) {
          setOrgs(
            data.split("\n").filter(function (value, index, self) {
              return self.indexOf(value) === index;
            })
          );
        }
      });
    return () => {
      ignore = true;
    };
  });

  const onChange = (newData: string | null) => {
    if (newData === null) {
      setVal(false);
      setCurOrg("");
      return;
    }
    newData.length !== 0 ? setVal(true) : setVal(false);
    setCurOrg(newData);
  };

  return (
    <Autocomplete
      disablePortal={true}
      options={orgs}
      value={curOrg}
      onChange={(_, data) => onChange(data)}
      filterOptions={(options, state) => {
        if (state.inputValue.length >= 2) {
          return options
            .filter((item) => String(item)
              .toLowerCase()
              .includes(state.inputValue.toLowerCase())
            )
            .slice(0, 7);
        }
        return [];
      }}
      className="h-12 w-[560px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed"
      renderInput={(params) => (
        <TextField
          {...params}
          error={!(val ?? true)}
          helperText={!(val ?? true) && "기관명을 입력하세요."}
          placeholder="기관명을 입력하세요." />
      )} />
  );
}
