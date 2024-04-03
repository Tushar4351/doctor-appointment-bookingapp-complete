"use client";

import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/",
    },
  ];
  return (
    <div
      className="flex items-center 
    justify-between p-4 shadow-sm"
    >
      <div className="flex items-center gap-10">
        <Image src="./logo.svg" alt="logo" width={200} height={100} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <li
                className="hover:text-primary
                    cursor-pointer hover:scale-105
                    transition-all ease-in-out"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <LoginLink>
        <Button>Get Started</Button>
      </LoginLink>
    </div>
  );
};

export default Header;
