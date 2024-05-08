import { ButtonHTMLAttributes } from "react";
import "./index.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export default function ButtonComponent({ label }: ButtonProps) {
  return <button className="button-style">{label}</button>;
}
