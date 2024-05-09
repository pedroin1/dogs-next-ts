import { ButtonHTMLAttributes, FormEvent } from "react";
import "./index.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  disabled?: boolean;
  loadingLabel?: string;
  handleClick?: (event: FormEvent<HTMLButtonElement>) => Promise<void>;
};

export default function ButtonComponent({
  label,
  loadingLabel,
  disabled,
  handleClick,
}: ButtonProps) {
  return (
    <button className="button-style" onClick={handleClick} disabled={disabled}>
      {disabled ? loadingLabel : label}
    </button>
  );
}
