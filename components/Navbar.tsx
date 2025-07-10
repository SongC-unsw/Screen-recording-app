"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const user = {};
const Navbar = () => {
  const router = useRouter();
  return (
    <header className="border-b border-gray-200 mb-4">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={36}
            height={36}
          />
          <h1 className="text-2xl font-bold">PopCast</h1>
        </Link>
        {user && (
          <figure className="flex items-center gap-3">
            <button onClick={() => router.push("/profile/12345")}>
              <Image
                src={"/assets/images/dummy.jpg"}
                alt="user"
                width={36}
                height={36}
                className="rounded-full hover:scale-110 transition-all duration-200"
              />
            </button>
            <button className="cursor-pointer">
              <LogOutIcon className="w-5 h-5 hover:text-red-400 hover:scale-110 transition-all duration-200" />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
