import { useState } from "react";
import { useRecoilState } from "recoil";
import { TextField } from "@mui/material";
import { accState } from "../stores/userStates";
import { accVal } from "../stores/validateStates";

export function AccInput() {
  const [isEmail, setIsEmail] = useState(false);
  const [isUsed, setIsUsed] = useState(false);
  const [acc, setAcc] = useRecoilState(accState);
  const [val, setVal] = useRecoilState(accVal);
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  // 이메일 양식 : RFC2822에 맞는 양식
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof Element)) {
      return;
    }
    if (e.target.value.match(re)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
    setVal(false);
    setIsUsed(false);
    setAcc(e.target.value);
  };

  // 지금은 양식에 맞는 모든 이메일이 통과됨
  // TODO?: 중복이 될 이메일 리스트라도 만들어두기?
  const validate = () => {
    window.alert("사용 가능한 이메일입니다.");
    setVal(true);
  };

  function checkErr() {
    if (val) {
      return false;
    }
    if (!isEmail) {
      return true;
    } else if (isEmail && isUsed) {
      return true;
    } else {
      return false;
    }
  }

  function helperText() {
    if (val) {
      return "";
    }
    if (!isEmail) {
      return "이메일 주소를 입력하세요.";
    } else if (isEmail && isUsed) {
      return "이미 사용 중인 계정입니다.";
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <TextField
          error={checkErr()}
          helperText={helperText()}
          className="h-12 w-[360px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed"
          placeholder="이메일을 입력하세요."
          value={acc}
          onChange={onChange}
          inputProps={{ readOnly: val ?? false }} />
      </div>
      <div className="w-24 h-12 rounded-lg justify-start items-start inline-flex">
        <button
          disabled={!isEmail}
          onClick={() => validate()}
          className="h-12 p-3 bg-gray-50 rounded-lg border border-neutral-300 justify-center items-center flex disabled:text-gray-400"
        >
          <div className="text-center px-2 h-6 text-base font-semibold font-['Inter'] leading-normal whitespace-nowrap">
            중복 확인
          </div>
        </button>
      </div>
    </>
  );
}
