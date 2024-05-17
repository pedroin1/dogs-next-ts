import MenuContaNav from "@/components/navHeader";

export default async function ContaLayout({ children }: Props) {
  return (
    <div className="container">
      <MenuContaNav />
      {children}
    </div>
  );
}

type Props = {
  children: React.ReactNode;
};
