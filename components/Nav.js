"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const pathName = usePathname();
  console.log(pathName.split("/"));
  let add = "patient";
  if (pathName != "/" && pathName[1]) {
    add = pathName.split("/")[1];
  } else if (pathName[2]) {
    add = pathName.split("/")[2];
  }
  console.log(add);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo512.png"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        {pathName.split("/")[1] === add && (
          <Link href="/">
            <p className="black_btn">back</p>
          </Link>
        )}
      </Link>

      {pathName.split("/")[1] == add && (
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
