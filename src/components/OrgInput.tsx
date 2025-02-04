import { useRecoilState } from "recoil";
import { TextField } from "@mui/material";
import { orgState } from "../stores/userStates";
import { orgVal } from "../stores/validateStates";

export function OrgInput() {
  const [curOrg, setCurOrg] = useRecoilState(orgState);
  const [val, setVal] = useRecoilState(orgVal);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof Element)) {
      return;
    }
    e.target.value.length > 0 ? setVal(true) : setVal(false);
    setCurOrg(e.target.value);
  };

  return (
    <TextField
      error={!(val ?? true)}
      helperText={!(val ?? true) && "기관명을 입력하세요."}
      className="h-12 w-[560px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed"
      placeholder="기관명을 입력하세요."
      value={curOrg}
      onChange={onChange} />
  );
}
