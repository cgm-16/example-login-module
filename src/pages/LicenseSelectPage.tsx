import React from "react";
import { useRecoilValue } from "recoil";
import "../index.css";
import { licVal } from "../stores/validateStates";
import { Layout, NavButtonLayout } from "../components/Layout";
import PrevButton from "../components/buttons/PrevButton";
import NextButton from "../components/buttons/NextButton";
import { LicInput } from "../components/LicInput";

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
