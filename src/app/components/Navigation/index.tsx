"use client";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex space-x-4 p-4 relative font-IBMPlexMono">
      <Link href="/home" className="link" passHref>
        Home
      </Link>
      <Link href="/tour" className="link" passHref>
        Tour
      </Link>
      <div
        className="link relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        Store
        {isDropdownOpen && (
          <div className="absolute top-full left-0 bg-white text-black w-max mt-2 rounded-md shadow-lg">
            <Link
              href="https://frontierer.bandcamp.com"
              target="_blank"
              className="dropdown-item"
            >
              Bandcamp
            </Link>
            <Link
              href="https://frontierer.bandcamp.com"
              target="_blank"
              className="dropdown-item"
            >
              US Store
            </Link>
            <Link
              href="https://frontierer.bandcamp.com"
              target="_blank"
              className="dropdown-item"
            >
              Australia Store
            </Link>
            <Link
              href="https://frontierer.bandcamp.com"
              target="_blank"
              className="dropdown-item"
            >
              EU Store
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
