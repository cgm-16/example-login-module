import { ButtonProps } from "../../types/props";
import DefaultButton from "./PrimaryButton";

const NextButton = ({ linkTo, validation }: ButtonProps) => (
  <DefaultButton
    isNext={true}
    linkTo={linkTo}
    text="다음"
    validation={validation}
  />
);

export default NextButton;