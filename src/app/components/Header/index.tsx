import FrontiererLogo from "../../assets/frontierer_logo.svg";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-start pt-4">
      <FrontiererLogo style={{ transform: "scale(0.5)" }} />
    </header>
  );
};

export default Header;
