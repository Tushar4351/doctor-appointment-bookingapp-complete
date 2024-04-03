"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

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
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

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
      {user ? (
        <Popover>
          <PopoverTrigger>
            <Image
              src={user.picture}
              alt="profile-image"
              width={40}
              height={40}
              className="rounded-full"
            />
            {/* ) : (
              <Image
                src={"./defaultUser"}
                alt="profile-image"
                width={40}
                height={40}
                className="rounded-full"
              />
            )} */}
          </PopoverTrigger>
          <PopoverContent className="w-44">
            <ul className="flex  flex-col gap-2">
              <li
                className="cursor-pointer
            hover:bg-slate-100 p-2 rounded-md"
              >
                Profile{" "}
              </li>
              <Link
                href={"/my-booking"}
                className="cursor-pointer
            hover:bg-slate-100 p-2 rounded-md"
              >
                My Booking
              </Link>

              <li
                className="cursor-pointer
            hover:bg-slate-100 p-2 rounded-md"
              >
                <LogoutLink> Logout </LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink>
          {" "}
          <Button>Get Started</Button>
        </LoginLink>
      )}
    </div>
  );
};

export default Header;
