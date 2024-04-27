import { faFacebook, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { links, Link as SocialLink } from "./socialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons/faBandcamp";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

const Link = () => {
  return (
    <div>
      {links.map((link, index) => (
        <div key={index}>
          <a href={link.appleMusic} target="_blank" rel="noopener noreferrer">
            Apple
            <FontAwesomeIcon icon={faApple} size="lg" />
          </a>
          <a href={link.bandcamp} target="_blank" rel="noopener noreferrer">
            Bandcamp
            <FontAwesomeIcon icon={faBandcamp} size="lg" />
          </a>
          <a href={link.facebook} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href={link.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href={link.spotify} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSpotify} size="lg" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Link;
