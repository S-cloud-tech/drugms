"use client";
import React, { useState } from "react";
import Image from "next/image";
// import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const DashboardCard = ({ post, handleTagClick, hanldeEdit, handleDelete }) => {
  const [copied, setCopied] = useState("");
  //   const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  return (
    <div className="prompt_card">
      <Link href={`/${post.name}`}>
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer ">
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {post.name}
              </h3>
            </div>
          </div>
        </div>
      </Link>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
    </div>
  );
};

export default DashboardCard;
