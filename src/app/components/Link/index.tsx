import { links } from "./socialLinks";
import {
  FaSpotify,
  FaBandcamp,
  FaApple,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Link = () => {
  return (
    <div>
      {links.map((link, index) => (
        <div
          key={index}
          className="flex flex-row justify-between items-center w-full p-4"
        >
          <a
            href={link.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            className="icon p-2 sm:p-3"
          >
            <FaApple className="w-full h-full" />
          </a>
          <a
            href={link.bandcamp}
            target="_blank"
            rel="noopener noreferrer"
            className="icon p-2 sm:p-3"
          >
            <FaBandcamp className="w-full h-full" />
          </a>
          <a
            href={link.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="icon p-2 sm:p-3"
          >
            <FaFacebook className="w-full h-full" />
          </a>
          <a
            href={link.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="icon p-2 sm:p-3"
          >
            <FaInstagram className="w-full h-full" />
          </a>
          <a
            href={link.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="icon p-2 sm:p-3"
          >
            <FaSpotify className="w-full h-full" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Link;
