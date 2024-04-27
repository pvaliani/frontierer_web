import FrontiererLogo from "../../assets/frontierer_logo.svg";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center pt-4">
      <Navigation />
      <FrontiererLogo style={{ transform: "scale(0.5)" }} />
    </header>
  );
};

export default Header;
