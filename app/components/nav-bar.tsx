"use client";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Logo } from "./logo";
import Link from "next/link";
import {
  ArrowLeftEndOnRectangleIcon,
  Cog8ToothIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { MenuToggle } from "./hamburger-icon";
import { stagger, useAnimate } from "framer-motion";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";

type menuItemsProps = {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  highlight?: boolean;
};

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "li.hamburger",
      isOpen
        ? { opacity: 1, transform: "translateY(0%)", filter: "blur(0px)" }
        : { opacity: 0, transform: "translateY(-100%)", filter: "blur(20px)" },
      {
        duration: 0.04,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      // ...menuAnimations
    ]);
  }, [isOpen]);

  return scope;
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMdScreen = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMdScreen) {
      setIsMenuOpen(false);
    }
  }, [isMdScreen]);

  const scope = useMenuAnimation(isMenuOpen);

  // nav links
  const navItems = [
    { name: "Blog", href: "/blog" },
    { name: "Courses", href: "/courses" },
    { name: "Pricing", href: "/pricing" },
  ];

  // profile menu links
  const profileItems: menuItemsProps[] = [
    { name: "Profile", href: "/settings", icon: UserIcon },
    { name: "Account Settins", href: "/support", icon: Cog8ToothIcon },
  ];

  // General menu links
  const menuItems: menuItemsProps[] = [
    {
      name: "Become a contributor",
      href: "/license",
      icon: SparklesIcon,
      highlight: true,
    },
    { name: "Log out", href: "/logout", icon: ArrowLeftEndOnRectangleIcon },
  ];

  return (
    <nav ref={scope} className="fixed w-full items-center justify-center shadow-xl backdrop-blur-md">
      <div
        className={`flex items-center justify-between max-w-screen-2xl h-16 ${
          isMenuOpen ? "bg-secondary" : "bg-inherit"
        } transition-colors duration-150 p-4 mx-auto`}
      >
        {/* logo & nav links */}
        <div className="flex items-center gap-4">
          <Link href='/' className="flex items-center gap-4">
            {" "}
            <Logo className="w-10 h-10" />
            <p className="text-lg font-medium text-foreground">somequiz</p>
          </Link>
          <ul className="flex gap-2 pl-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  key={item.name}
                  href={item.href}
                  className="hidden md:block text-sm font-medium p-2 hover:bg-green-100 rounded-md transition-colors duration-150"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <Menu>
            {/* profile icon */}
            <MenuButton className="hidden md:block w-9 h-9 rounded-full border-2 border-border overflow-hidden">
              <Image
                src="/profile.png"
                width={36}
                height={36}
                alt="profile photo"
              />
            </MenuButton>
            {/* profile menu */}
            <MenuItems
              anchor="bottom end"
              className="w-auto rounded-lg bg-background border border-border mt-2"
            >
              <MenuItem>
                <div className="flex gap-2 h-full bg-secondary p-4 border-b border-border">
                  <div className="rounded-full border-2 border-border overflow-hidden">
                    <Image
                      src="/profile.png"
                      width={44}
                      height={44}
                      alt="profile photo"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-md font-medium">Httge ptha</p>
                    <p className="text-xs text-green-600 cursor-pointer">
                      @httge_putha
                    </p>
                  </div>
                </div>
              </MenuItem>
              {profileItems.map((item, index) => (
                <MenuItem key={index}>
                  <Link
                    className={`w-auto flex gap-3 data-[focus]:bg-secondary px-4 py-2 m-2 transition-colors duration-150 rounded-sm text-sm ${
                      item.highlight ? "text-yellow-500" : ""
                    }`}
                    href={item.href}
                  >
                    <span>{<item.icon className="w-4" />}</span>
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
              <MenuSeparator className="my-1- h-px bg-border" />

              {menuItems.map((item, index) => (
                <MenuItem key={index}>
                  <Link
                    className={`w-auto flex gap-3 data-[focus]:bg-secondary px-4 py-2 m-2 rounded-sm transition-colors duration-150 text-sm`}
                    href={item.href}
                  >
                    <div
                      className={`flex gap-3 ${
                        item.highlight
                          ? "bg-clip-text text-transparent bg-gradient-to-r  font-medium from-green-500 to-emerald-400 data-[focus]:bg-yellow-900"
                          : ""
                      }`}
                    >
                      <span>
                        {
                          <item.icon
                            className={`w-4 ${
                              item.highlight ? "text-green-500" : ""
                            }`}
                          />
                        }
                      </span>
                      {item.name}
                    </div>
                  </Link>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
          {/* hamburger icon */}
          <MenuToggle
            className="block md:hidden"
            toggle={() => setIsMenuOpen(!isMenuOpen)}
          />
          {/* hamburger menu */}
          <nav
            ref={scope}
            className={`fixed md:hidden ${
              isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            } w-screen display-height overflow-y-auto top-[64px] left-0 bg-background transition-all  duration-150`}
          >
            <div
              className="flex justify-between items-center gap-2 bg-accent px-6 py-4"
            >
              <Link href="/profile" className="flex gap-2">
                <div className="rounded-full border-2 border-ring overflow-hidden">
                  <Image
                    src="/profile.png"
                    width={56}
                    height={56}
                    alt="profile photo"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-md">Httge ptha</p>
                  <p className="text-xs text-green-600 cursor-pointer">
                    @httge_putha
                  </p>
                </div>
              </Link>
              <div className="group relative">
                <Cog8ToothIcon className="w-6 cursor-pointer" />
                <span className="absolute w-auto top- right-0 scale-0 transition-all rounded bg-zinc-950 p-2 text-xs text-zinc-50 group-hover:scale-100 text-nowrap">
                  🥺 Account Settings
                </span>
              </div>
            </div>

            <div className="my-1- h-px bg-border"></div>
            <div
              style={{
                pointerEvents: isMenuOpen ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50% round 10px)",
              }}
              className="my-1- h-px bg-zinc-800"
            ></div>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="hamburger">
                  <Link
                    className={`w-auto flex gap-3 hover:bg-secondary px-4 py-3 m-2 rounded-sm transition-colors duration-150 text-sm`}
                    href={item.href}
                  >
                    <div
                      className={`flex gap-3 ${
                        item.highlight
                          ? "bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500 font-medium"
                          : ""
                      }`}
                    >
                      <span>
                        {
                          <item.icon
                            className={`w-4 ${
                              item.highlight ? "text-green-600" : ""
                            }`}
                          />
                        }
                      </span>
                      {item.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="my-1- h-px bg-border"></div>

            <ul className="">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <li className="hamburger w-auto flex gap-3 hover:bg-secondary px-4 py-3 m-2 rounded-sm transition-colors duration-150 text-sm">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}
