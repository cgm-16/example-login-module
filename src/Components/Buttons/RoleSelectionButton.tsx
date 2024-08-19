import { useRecoilState } from "recoil";
import { roleState } from "../../States/UserStates";
import { WorkerRole } from "../Types/Roles";

export type RoleButtonProps = {
  roleType: WorkerRole;
};

const roleType2Txt = (T: WorkerRole): string => {
  switch (T) {
    case "doctor":
      return "의사";
    case "nurse":
      return "간호사";
    case "researcher":
      return "연구자";
    case "admin":
      return "행정 담당자";
  }
};

export const RoleButton = ({ roleType }: RoleButtonProps) => {
  const [role, setRole] = useRecoilState(roleState);

  const changeRoles = (roleToChange: WorkerRole) => {
    if (role === roleToChange) return;
    setRole(roleToChange);
  };

  return (
    <div className="grow basis-0">
      <input
        type="radio"
        className="peer hidden"
        name="roles"
        id={roleType}
        value={roleType}
        checked={role === roleType}
        onClick={() => changeRoles(roleType)}
      />
      <label
        htmlFor={roleType}
        className="h-12 py-3 bg-white rounded-lg border border-neutral-300 justify-center items-center flex peer-checked:border-blue-600"
      >
        <div className="text-center text-slate-900 text-base font-semibold font-['Inter'] leading-normal">
          { roleType2Txt(roleType) }
        </div>
      </label>
    </div>
  );
};
