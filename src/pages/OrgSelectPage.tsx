import React from "react";
import { useRecoilValue } from "recoil";
import "../index.css";
import { roleState } from "../stores/userStates";
import { orgVal } from "../stores/validateStates";
import { Layout, NavButtonLayout } from "../components/Layout";
import PrevButton from "../components/buttons/PrevButton";
import NextButton from "../components/buttons/NextButton";
import { OrgInput } from "../components/OrgInput";
import { OrgAuto } from "../components/OrgAuto";

export default function SelectOrg() {
  const role = useRecoilValue(roleState);
  const val = useRecoilValue(orgVal);

  return (
    <Layout>
      <>
        <div className="justify-center items-center mb-24">
          <div className="text-zinc-800 text-2xl font-semibold font-['Inter']">
            소속된 기관을 입력하세요.
          </div>
        </div>
        <div className="justify-start items-center gap-6 inline-flex">
          <div className="h-6 justify-start items-center gap-6 flex">
            <div className="text-zinc-800 text-base font-medium font-['Inter'] leading-relaxed">
              기관명
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            {role === "doctor" || role === "nurse" ? <OrgAuto /> : <OrgInput />}
          </div>
        </div>

        <NavButtonLayout>
          <>
            <div className="h-12 justify-center items-start flex">
              <PrevButton linkTo="/" />
            </div>
            <div className="h-12 justify-center items-start flex">
              {role === "doctor" || role === "nurse" ? (
                <NextButton linkTo="/license" validation={val ?? false} />
              ) : (
                <NextButton linkTo="/account" validation={val ?? false} />
              )}
            </div>
          </>
        </NavButtonLayout>
      </>
    </Layout>
  );
}
