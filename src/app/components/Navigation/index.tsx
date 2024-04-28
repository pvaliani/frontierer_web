import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex space-x-4">
      <Link href="/home" className="text-white hover:text-gray-300" passHref>
        Home
      </Link>
      <Link href="/tour" className="text-white hover:text-gray-300" passHref>
        Tour
      </Link>
      <Link href="/store" className="text-white hover:text-gray-300" passHref>
        Store
      </Link>
    </nav>
  );
};

export default Navigation;
