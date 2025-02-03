import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import "../index.css";
import { TextField } from "@mui/material";
import { licState } from "../States/UserStates";
import { licVal } from "../States/ValidateState";
import { Layout, NavButtonLayout } from "../Components/Layout";
import PrevButton from "../Components/Buttons/PrevButton";
import NextButton from "../Components/Buttons/NextButton";

function LicInput() {
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
      onChange={onChange}
    />
  );
}

export default function SelectLicense() {
  const val = useRecoilValue(licVal);

  return (
    <Layout>
      <>
        <div className="justify-center items-start gap-8 inline-flex mb-24">
          <div className="text-zinc-800 text-2xl font-semibold font-['Inter'] leading-loose">
            면허 번호를 입력하세요.
          </div>
        </div>
        <div className="justify-start items-center gap-6 inline-flex">
          <div className="h-6 justify-start items-center gap-6 flex">
            <div className="text-zinc-800 text-base font-medium font-['Inter'] leading-relaxed">
              면허 번호
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <LicInput />
          </div>
        </div>

        <NavButtonLayout>
          <>
            <div className="h-12 justify-center items-start flex">
              <PrevButton linkTo="/organization" />
            </div>
            <div className="h-12 justify-center items-start flex">
              <NextButton linkTo="/account" validation={val ?? false} />
            </div>
          </>
        </NavButtonLayout>
      </>
    </Layout>
  );
}
