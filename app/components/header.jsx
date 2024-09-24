"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  const links = [
    { title: "Home", href: "/" },
    { title: "Support", href: "/support" },
    { title: "Store", href: "/store" },
    { title: "About", href: "/about" },
  ];
  return (
    <header className="my-4">
      <nav>
        <ul className="flex items-center gap-x-5 justify-center">
          {links.map((link, i) => (
            <li
              key={i}
              className={`hover:border-b hover:cursor-pointer border-b ${
                link.href === pathname
                  ? "border-b-white"
                  : "border-b-transparent"
              } hover:border-b-white transition-all duration-300`}
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
