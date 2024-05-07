import Image from "next/image";
import "./index.scss";

export default function FooterComponent() {
  return (
    <footer className="footer-content">
      <Image
        alt="footerDogImage"
        src={"/assets/dogs-footer.svg"}
        width={28}
        height={22}
      />
      <p>Dogs. Todos Os Direitos Reservados</p>
    </footer>
  );
}
