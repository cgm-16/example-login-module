import { useRecoilValue } from "recoil";
import "../index.css";
import { roleState } from "../stores/userStates";
import { accVal } from "../stores/validateStates";
import { Layout, NavButtonLayout } from "../components/Layout";
import PrevButton from "../components/buttons/PrevButton";
import NextButton from "../components/buttons/NextButton";
import { AccInput } from "../components/AccInput";

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
