import Image from "next/image";
import BareknucklePickupsLogo from "../../../../public/brand/Bareknuckle_pickups_logo.png";
import IbanezLogo from "../../../../public/brand/Ibanez_logo_PNG1.png";
import ChapmanGuitarsLogo from "../../../../public/brand/Chapman_guitars_logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center space-y-4 p-4">
      <div className="flex justify-center items-center space-x-4">
        <div className="w-1/12">
          <Image
            src={BareknucklePickupsLogo}
            alt="Bareknuckle pickups logo"
            layout="responsive"
          />
        </div>
        <div className="w-1/12">
          <Image
            className="img-invert"
            src={IbanezLogo}
            alt="Ibanez guitars logo"
            layout="responsive"
          />
        </div>
        <div className="w-1/12">
          <Image
            className="img-invert"
            src={ChapmanGuitarsLogo}
            alt="Chapman guitars logo"
            layout="responsive"
          />
        </div>
      </div>
      <div className="text-lg text-center">
        © Copyright Frontierer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
