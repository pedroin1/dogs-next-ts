import "./page.scss";

type Props = {
  children: React.ReactNode;
};

export default async function LoginLayout({ children }: Props) {
  return (
    <div className="grid-login">
      <h1>Foto do cachorro aqui</h1>
      {children}
    </div>
  );
}
