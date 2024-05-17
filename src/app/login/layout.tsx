import "./page.scss";

export default async function LoginLayout({ children }: Props) {
  return (
    <div className="login">
      <div className="form-login">{children}</div>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
};
