import { links, Link as SocialLink } from "./socialLinks";

const Link = () => {
  return (
    <div>
      {links.map((link, index) => (
        <div key={index}>
          <a href={link.appleMusic} target="_blank" rel="noopener noreferrer">
            Apple Music
          </a>
          <a href={link.bandcamp} target="_blank" rel="noopener noreferrer">
            Bandcamp
          </a>
          <a href={link.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={link.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={link.spotify} target="_blank" rel="noopener noreferrer">
            Spotify
          </a>
        </div>
      ))}
    </div>
  );
};

export default Link;
