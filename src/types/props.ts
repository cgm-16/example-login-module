import { Routes } from "./routes";

export type ButtonProps = {
  linkTo: Routes;
  isNext?: boolean;
  text?: string;
  validation?: boolean;
};
