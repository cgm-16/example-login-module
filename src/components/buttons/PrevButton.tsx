import { ButtonProps } from "../../types/props";
import DefaultButton from "./PrimaryButton";

const PrevButton = ({ linkTo }: ButtonProps) => (
    <DefaultButton isNext={false} linkTo={linkTo} text="이전" />
  );

export default PrevButton;