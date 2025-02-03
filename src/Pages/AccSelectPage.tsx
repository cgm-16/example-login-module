import { useRecoilValue } from "recoil";
import "../index.css";
import { roleState } from "../Stores/userStates";
import { accVal } from "../Stores/validateStates";
import { Layout, NavButtonLayout } from "../Components/Layout";
import PrevButton from "../Components/Buttons/PrevButton";
import NextButton from "../Components/Buttons/NextButton";
import { AccInput } from "../Components/AccInput";

export default function SelectAcc() {
  const val = useRecoilValue(accVal);
  const role = useRecoilValue(roleState);

  return (
    <Layout>
      <>
        <div className="justify-center items-center mb-24">
          <div className="text-zinc-800 text-2xl font-semibold font-['Inter'] leading-loose">
            계정을 입력하세요.
          </div>
        </div>
        <div className="justify-start items-center gap-6 inline-flex">
          <div className="h-6 justify-start items-center gap-6 flex">
            <div className="text-zinc-800 text-base font-medium font-['Inter'] leading-relaxed">
              이메일 계정
            </div>
          </div>
          <AccInput />
        </div>

        <NavButtonLayout>
          <>
            <div className="h-12 justify-center items-start flex">
              {role === "doctor" || role === "nurse" ? (
                <PrevButton linkTo="/license" />
              ) : (
                <PrevButton linkTo="/organization" />
              )}
            </div>
            <div className="h-12 justify-center items-start flex">
              <NextButton linkTo="/password" validation={val ?? false} />
            </div>
          </>
        </NavButtonLayout>
      </>
    </Layout>
  );
}
