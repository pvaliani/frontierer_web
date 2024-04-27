import { links, Link as SocialLink } from "./socialLinks";

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
        <div key={index}>
          <a href={link.appleMusic} target="_blank" rel="noopener noreferrer">
            <FaApple size="4rem" />
          </a>
          <a href={link.bandcamp} target="_blank" rel="noopener noreferrer">
            <FaBandcamp size="4rem" />
          </a>
          <a href={link.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook size="4rem" />
          </a>
          <a href={link.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram size="4rem" />
          </a>
          <a href={link.spotify} target="_blank" rel="noopener noreferrer">
            <FaSpotify size="4rem" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Link;
