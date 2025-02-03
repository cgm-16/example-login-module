import React from "react";
import { useRecoilState } from "recoil";
import { TextField } from "@mui/material";
import { licState } from "../Stores/userStates";
import { licVal } from "../Stores/validateStates";

export function LicInput() {
  const [lic, setLic] = useRecoilState(licState);
  const [val, setVal] = useRecoilState(licVal);
  const re = /[^a-zA-Z0-9]/;

  // 마지막 글자가 조건에 맞지 않는 경우 해당 글자를 지워버림.
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof Element)) {
      return;
    }
    if (e.target.value.slice(-1).match(re) !== null) {
      e.target.value = e.target.value.slice(0, -1);
    }
    e.target.value.length >= 5 ? setVal(true) : setVal(false);
    setLic(e.target.value);
  };

  return (
    <TextField
      error={!(val ?? true)}
      helperText={!(val ?? true) && "면허 번호를 입력하세요."}
      className="h-12 w-[460px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed"
      placeholder="면허 번호를 입력하세요."
      value={lic}
      onChange={onChange} />
  );
}
