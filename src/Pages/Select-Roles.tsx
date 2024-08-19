import "../index.css";
import { NextBtn } from "../Components/Buttons/NavButtons";
import { Layout, NavButtonLayout } from "../Components/Layout";
import { RoleButton } from "../Components/Buttons/RoleSelectionButton";

const RoleSection = () => {
  return (
    <>
      <div className="flex self-stretch justify-start gap-6 mx-72">
        <RoleButton roleType="doctor" />
        <RoleButton roleType="nurse" />
      </div>
      <div className="flex self-stretch justify-start gap-6 mx-72">
        <RoleButton roleType="researcher" />
        <RoleButton roleType="admin" />
      </div>
    </>
  );
};

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
            <NextBtn linkTo="/organization" validation={true} />
          </div>
        </NavButtonLayout>
      </>
    </Layout>
  );
}
