import Image from "next/image";
import BareknucklePickupsLogo from "../../../../public/Bareknuckle_pickups_logo.png";
import IbanezLogo from "../../../../public/Ibanez_logo_PNG1.png";
import ChapmanGuitarsLogo from "../../../../public/Chapman_guitars_logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-center space-x-4">
      <div className="w-1/4">
        <Image
          src={BareknucklePickupsLogo}
          alt="Bareknuckle pickups logo"
          layout="responsive"
          width={120}
          height={60}
        />
      </div>
      <div className="w-1/4">
        <Image
          src={IbanezLogo}
          alt="Ibanez guitars logo"
          layout="responsive"
          width={120}
          height={60}
        />
      </div>
      <div className="w-1/4">
        <Image
          src={ChapmanGuitarsLogo}
          alt="Chapman guitars logo"
          layout="responsive"
          width={120}
          height={60}
        />
      </div>
    </footer>
  );
};

export default Footer;
