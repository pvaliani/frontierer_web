import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex space-x-4 p-4">
      <Link
        href="/home"
        className="text-m md:text-2xl lg:text-3xl text-center text-white hover:text-gray-300"
        passHref
      >
        Home
      </Link>
      <Link
        href="/tour"
        className="text-m md:text-2xl lg:text-3xl text-center text-white hover:text-gray-300"
        passHref
      >
        Tour
      </Link>
      <Link
        href="/store"
        className="text-m md:text-2xl lg:text-3xl text-center text-white hover:text-gray-300"
        passHref
      >
        Store
      </Link>
    </nav>
  );
};

export default Navigation;
