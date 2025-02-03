import { Routes } from "../../Router/Router";

export type ButtonProps = {
  linkTo: Routes;
  isNext?: boolean;
  text?: string;
  validation?: boolean;
};
