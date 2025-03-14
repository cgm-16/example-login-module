import React from "react";
import { useRecoilValue } from "recoil";
import "../index.css";
import { pwVal } from "../stores/validateStates";
import { Layout, NavButtonLayout } from "../components/Layout";
import PrevButton from "../components/buttons/PrevButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { PwInput } from "../components/PwInput";

export default function SelectPw() {
  const val = useRecoilValue(pwVal);

  return (
    <Layout>
      <>
        <div className="justify-center items-center mb-24">
          <div className="text-zinc-800 text-2xl font-semibold font-['Inter'] leading-loose">
            비밀번호를 입력하세요.
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex gap-8">
          <PwInput />
        </div>

        <NavButtonLayout>
          <>
            <div className="h-12 justify-center items-start flex">
              <PrevButton linkTo="/account" />
            </div>
            <div className="h-12 justify-center items-start flex">
              <PrimaryButton
                isNext={true}
                linkTo="/finished"
                text="회원 가입하기"
                validation={val ?? false}
              />
            </div>
          </>
        </NavButtonLayout>
      </>
    </Layout>
  );
}
