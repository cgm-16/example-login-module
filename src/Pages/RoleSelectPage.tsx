import "../index.css";
import { Layout, NavButtonLayout } from "../Components/Layout";
import NextButton from "../Components/Buttons/NextButton";
import { RoleSection } from "../Components/RoleSection";

export default function SelectRoles() {
  return (
    <Layout>
      <>
        <div className="justify-center items-center mb-24">
          <div className="text-zinc-800 text-2xl font-semibold font-['Inter']">
            해당하는 직무를 선택하세요.
          </div>
        </div>
        <RoleSection />
        <NavButtonLayout>
          <div className="justify-center items-start flex">
            <NextButton linkTo="/organization" validation={true} />
          </div>
        </NavButtonLayout>
      </>
    </Layout>
  );
}
