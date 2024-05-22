import { ButtonHTMLAttributes, FormEvent } from "react";

export default function ButtonComponent({
  label,
  loadingLabel,
  disabled,
  handleClick,
}: ButtonProps) {
  return (
    <button className="button" onClick={handleClick} disabled={disabled}>
      <span>{disabled ? loadingLabel : label}</span>
    </button>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  disabled?: boolean;
  loadingLabel?: string;
  handleClick?: (event: FormEvent<HTMLButtonElement>) => Promise<void>;
};
