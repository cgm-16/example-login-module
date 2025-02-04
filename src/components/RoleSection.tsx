import { RoleButton } from "./buttons/RoleSelectionButton";

export const RoleSection = () => {
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
