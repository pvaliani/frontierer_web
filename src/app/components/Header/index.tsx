import FrontiererLogo from "../../assets/frontierer_logo.svg";
import Navigation from "../Navigation";
import Link from "../Link";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center pt-4">
      <Navigation />
      <FrontiererLogo
        className="logo-enter"
        style={{ transform: "scale(0.5)" }}
      />
      <Link />
    </header>
  );
};

export default Header;
