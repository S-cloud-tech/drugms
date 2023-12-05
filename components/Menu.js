import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    // className=" w-full max-w-3xl flex flex-col gap-6 glassmorphism"
    <div className="flex flex-col max-w-3xl mt-1 w-44 gap-6 glassmorphism">
      <Link href="/patient">
        <p className="font-inter text-sm text-gray-500">Patients</p>
      </Link>
      <Link href="/drug">
        <p className="font-inter text-sm text-gray-500">Drugs</p>
      </Link>
      <Link href="/counselor">
        <p className="font-inter text-sm text-gray-500">Counselors</p>
      </Link>
      <Link href="incident">
        <p className="font-inter text-sm text-gray-500">Incidents</p>
      </Link>
      <Link href="labtest">
        <p className="font-inter text-sm text-gray-500">Lab test</p>
      </Link>
    </div>
  );
};

export default Menu;
