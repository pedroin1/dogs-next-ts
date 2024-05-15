`use client`;
import "./index.scss";

type InputProps = React.ComponentProps<`input`> & {
  label: string;
  placeholder?: string;
  error?: string;
};

export default function InputComponent({ label, error, ...props }: InputProps) {
  return (
    <div className="input-container">
      <label className="label-style" htmlFor={label}>
        {label}
      </label>
      <input className="input-style" {...props} />
    </div>
  );
}
