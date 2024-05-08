import "./page.scss";

type Props = {
  children: React.ReactNode;
};

export default async function LoginLayout({ children }: Props) {
  return (
    <div className="login">
      <div className="form-login">{children}</div>
    </div>
  );
}
