"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// TODO: create actual pages
type NAVITEMSTYPE = {
  name: string;
  linkUrl: string;
  active: boolean;
};

const NAVLINKS: NAVITEMSTYPE[] = [
  {
    name: "Lorem Ipsum 1",
    linkUrl: "/page1",
    active: true,
  },
  {
    name: "Lorem Ipsum 2",
    linkUrl: "/page2",
    active: true,
  },
  {
    name: "Lorem Ipsum 3",
    linkUrl: "/page3",
    active: true,
  },
  {
    name: "Lorem Ipsum 4",
    linkUrl: "#",
    active: false,
  },
];

const Navbar = () => {
  const [hamburgerMenuOpen, sethamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenuOpen = () => {
    sethamburgerMenuOpen(!hamburgerMenuOpen);
  };

  return (
    <div className="py-5 flex flex-col items-between space-y-9 bg-black px-8 mx-auto text-slate-200">
      <nav className="flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="flex items-center cursor-pointer space-x-2">
            {/* Dummy log - not able to download actual from Figma */}
            <Image
              className="h-10 inline"
              src="logo lorem.svg"
              alt="Alt text"
              width="30"
              height="30"
            />
            <p>Lorem</p>
          </span>
        </Link>

        {/* Links are hidden on desktop - as per figma design */}
        {/* <div className="hidden md:flex items-center space-x-9">
          {NAVLINKS.map((link, index) => (
            <Link key={index} href={link.linkUrl}>
              {link.name}
            </Link>
          ))}
        </div> */}

        <div
          onClick={toggleHamburgerMenuOpen}
          className="hmcontainer flex items-center justify-center md:hidden"
        >
          <div
            className={`hamburger flex flex-col justify-between ${
              hamburgerMenuOpen ? "open" : ""
            }`}
          >
            <span className={"line"}></span>
            <span className={"line"}></span>
          </div>
        </div>
      </nav>

      <div
        className={`${"hamburgermenu fixed flex flex-col gap-5 justify-center text-lg px-8 uppercase"} ${
          hamburgerMenuOpen ? "flex" : "hidden"
        }`}
      >
        {NAVLINKS.map((link, index) => (
          <Link
            key={index}
            href={link.linkUrl}
            className={`${"flex justify-between"} ${
              !link.active ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <div>{link.name}</div>
            {!link.active ? <div>Coming soon</div> : null}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
