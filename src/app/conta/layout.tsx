import MenuContaNav from "@/components/navHeader";

type Props = {
  children: React.ReactNode;
};

export default async function ContaLayout({ children }: Props) {
  return (
    <div className="container">
      <MenuContaNav />
      {children}
    </div>
  );
}
