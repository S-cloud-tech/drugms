"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import PromptCard from "./PromptCard";
import Menu from "./Menu";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [menu, setMenu] = useState(false);
  const [toggle_add, setToggleAdd] = useState(false);
  const pathName = usePathname();
  console.log(pathName.split("/"));
  let add = "patient";
  if (pathName.split("/")[2]) {
    add = pathName.split("/")[2];
    console.log(add);
  } else if (pathName != "/" && pathName.split("/")[1]) {
    add = pathName.split("/")[1];
    console.log(add);
  }
  console.log(add);

  if (pathName[1] == add) {
    console.log("kskd");
    setToggleAdd(true);
  }
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <div href="/" className="flex gap-2 ">
        <Image
          src="/assets/icons/menu.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
          onClick={() => {
            setMenu((prev) => !prev);
          }}
        />
        {pathName.split("/")[1] === add && (
          <Link href="/">
            <p className="black_btn">back</p>
          </Link>
        )}
        {menu && (
          <div className="absolute mt-10">
            <Menu />
          </div>
        )}
      </div>

      {pathName.split("/")[1] != "new" && (
        <div className="sm:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <Link href={`/new/${add}`} className="black_btn">
              Add {add}
            </Link>

            <Link href="/profile">
              <Image
                src="/assets/images/favicon.ico"
                width={30}
                height={30}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/assets/images/favicon.ico"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => {
              setToggleDropdown((prev) => !prev);
            }}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/create-prompt"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Add `something`
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
