// @ts-nocheck
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion, stagger, useAnimate } from "framer-motion";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";

import {
  UserIcon,
  Cog8ToothIcon,
  SparklesIcon,
  ArrowLeftEndOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// import { SearchBar } from "./search-bar";

const Logo = (LogoProps: { className: string }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 249.70980847411192 136.77077854479649"
      width="749.1294254223358"
      height="410.31233563438946"
      className={LogoProps.className}
    >
      <g
        strokeLinecap="round"
        transform="translate(8.767165408748951 47.36387318968809) rotate(8.357607197566152 116.08773882830701 39.915400498031886)"
      >
        <path
          d="M146.25 10 C168.21 17.75, 190.17 25.5, 202.93 30 C232.18 40, 232.18 40, 202.93 50 C189.61 54.66, 176.29 59.32, 146.25 69.83 C117 79.83, 117 79.83, 87.75 69.83 C74.76 65.43, 61.78 61.03, 29.25 50 C0 40, 0 40, 29.25 30 C50.07 22.88, 70.89 15.76, 87.75 10 C117 0, 117 0, 146.25 10"
          stroke="none"
          strokeWidth="0"
          fill="#b2f2bb"
        ></path>
        <path
          d="M146.25 10 C167.07 17.35, 187.89 24.69, 202.93 30 M146.25 10 C163.14 15.96, 180.03 21.92, 202.93 30 M202.93 30 C232.18 40, 232.18 40, 202.93 50 M202.93 30 C232.18 40, 232.18 40, 202.93 50 M202.93 50 C189.5 54.7, 176.08 59.39, 146.25 69.83 M202.93 50 C180.3 57.92, 157.67 65.83, 146.25 69.83 M146.25 69.83 C117 79.83, 117 79.83, 87.75 69.83 M146.25 69.83 C117 79.83, 117 79.83, 87.75 69.83 M87.75 69.83 C71.05 64.17, 54.36 58.51, 29.25 50 M87.75 69.83 C72.74 64.74, 57.72 59.65, 29.25 50 M29.25 50 C0 40, 0 40, 29.25 30 M29.25 50 C0 40, 0 40, 29.25 30 M29.25 30 C41.29 25.88, 53.34 21.76, 87.75 10 M29.25 30 C48.72 23.34, 68.19 16.69, 87.75 10 M87.75 10 C117 0, 117 0, 146.25 10 M87.75 10 C117 0, 117 0, 146.25 10"
          stroke="#2f9e44"
          strokeWidth="4"
          fill="none"
        ></path>
      </g>
      <g
        strokeLinecap="round"
        transform="translate(8.962405240591579 9.1027292167837) rotate(347.82844474073534 116.08773882830701 39.915400498031886)"
      >
        <path
          d="M146.25 10 C160.9 15.17, 175.56 20.34, 202.93 30 C232.18 40, 232.18 40, 202.93 50 C187.3 55.47, 171.67 60.94, 146.25 69.83 C117 79.83, 117 79.83, 87.75 69.83 C71.01 64.16, 54.27 58.48, 29.25 50 C0 40, 0 40, 29.25 30 C52.09 22.19, 74.94 14.38, 87.75 10 C117 0, 117 0, 146.25 10"
          stroke="none"
          strokeWidth="0"
          fill="#b2f2bb"
        ></path>
        <path
          d="M146.25 10 C160.33 14.97, 174.4 19.93, 202.93 30 M146.25 10 C160.49 15.03, 174.73 20.05, 202.93 30 M202.93 30 C232.18 40, 232.18 40, 202.93 50 M202.93 30 C232.18 40, 232.18 40, 202.93 50 M202.93 50 C191.4 54.03, 179.88 58.06, 146.25 69.83 M202.93 50 C181.42 57.52, 159.92 65.05, 146.25 69.83 M146.25 69.83 C117 79.83, 117 79.83, 87.75 69.83 M146.25 69.83 C117 79.83, 117 79.83, 87.75 69.83 M87.75 69.83 C67.3 62.9, 46.84 55.96, 29.25 50 M87.75 69.83 C65.52 62.29, 43.29 54.76, 29.25 50 M29.25 50 C0 40, 0 40, 29.25 30 M29.25 50 C0 40, 0 40, 29.25 30 M29.25 30 C43.53 25.12, 57.81 20.24, 87.75 10 M29.25 30 C45.62 24.4, 61.99 18.81, 87.75 10 M87.75 10 C117 0, 117 0, 146.25 10 M87.75 10 C117 0, 117 0, 146.25 10"
          stroke="#2f9e44"
          strokeWidth="4"
          fill="none"
        ></path>
      </g>
    </svg>
  );
};

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

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navItems = [
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "Courses", href: "/courses" },
  ];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleSearch = (event: KeyboardEvent) => {
      if (event.key === "/") {
        setIsSearchOpen(!isSearchOpen);
      }
    };

    window.addEventListener("keydown", handleSearch);

    return () => {
      window.removeEventListener("keydown", handleSearch);
    };
  }, []);

  const profileItems: menuItemsProps[] = [
    { name: "Profile", href: "/settings", icon: UserIcon },
    { name: "Account Settins", href: "/support", icon: Cog8ToothIcon },
  ];

  const menuItems: menuItemsProps[] = [
    {
      name: "Become a contributor",
      href: "/license",
      icon: SparklesIcon,
      highlight: true,
    },
    { name: "Log out", href: "/logout", icon: ArrowLeftEndOnRectangleIcon },
  ];

  // here
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      // animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

      // animate(
      //   "section",
      //   isOpen
      //     ? {
      //         // opacity: 1 ,
      //         height: "10%",
      //         // transform: "translateY(0%)",
      //         ease: [0.08, 0.65, 0.53, 0.96],
      //         duration: 0.6,
      //       }
      //     : {
      //         // opacity: 0 ,
      //         height: "0%",
      //         // transform: "translateY(-100%)",
      //         at: "-0.1",
      //       }
      // );

      // {
      //   duration: 0.2,
      // },
      // {
      //   clipPath: isOpen
      //     ? "inset(0% 0% 0% 0% round 10px)"
      //     : "inset(10% 50% 90% 50% round 10px)",
      // },
      // {
      //   type: "spring",
      //   bounce: 0,
      //   duration: 0.5,
      // }

      animate(
        "li",
        isOpen
          ? { opacity: 1, transform: "translateY(0%)", filter: "blur(0px)" }
          : { opacity: 0, transform: "translateY(-100%)", filter: "blur(20px)" },
        {
          duration: 0.08,
          delay: isOpen ? staggerMenuItems : 0,
        }
      );
      // animate(
      //   "a",
      //   isOpen
      //     ? { opacity: 1, scale: 1, filter: "blur(0px)" }
      //     : { opacity: 0, scale: 0.5, filter: "blur(20px)" },
      //   {
      //     duration: 0.1,
      //     delay: isOpen ? staggerMenuItems : 0,
      //   }
      // );
    }, [isOpen]);

    return scope;
  }

  const scope = useMenuAnimation(isMenuOpen);

  return (
    <nav
      className={`fixed w-full h-16 px-6 py-4 z-20 ${
        isMenuOpen ? "bg-zinc-900 md:bg-inherit" : ""
      }`}
    >
      <div
        // ref={scope}
        className="flex max-w-7xl items-center justify-between px-4- mx-auto"
      >
        <div className="flex gap-4 items-center">
          <Link className="flex items-center gap-2" href="/">
            <Logo className="w-10 h-10" />
            <p>somequiz</p>
          </Link>
          <ul className="hidden md:flex gap-4">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {/* search bar */}
          {isSearchOpen && (
            <div className="hidden sm:flex w-auto h-6  items-center justify-center">
              <input
                type="search"
                className="bg-zinc-900 text-zinc-100 placeholder-zinc-400 border border-zinc-700 rounded-lg px-4 py-2 "
                placeholder="Search"
              />
            </div>
          )}
          <button
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              console.log(isSearchOpen);
            }}
            className="w-7 h-7 flex items-center justify-center text-xs  font-bold text-center rounded-md border border-zinc-700 bg-zinc-800"
          >
            <span>/</span>
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6" />
            ) : (
              <Bars3Icon className="w-6" />
            )}
          </button>
          {/* hamburger menu */}
          <section
            id="menu"
            ref={scope}
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden fixed inset-0 mt-16 bg-zinc-950- bg-yellow-500 bg-opacity-90`}
          >
            <div
              // ref={scope}
              className="flex justify-between items-center gap-2 bg-zinc-900 px-6 py-4"
            >
              <Link href="/profile" className="flex gap-2">
                <div className="rounded-full border-2 border-zinc-800 overflow-hidden">
                  <Image
                    src="/profile.png"
                    width={56}
                    height={56}
                    alt="profile photo"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-md">Httge ptha</p>
                  <p className="text-xs text-green-500 cursor-pointer">
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

            <div className="my-1- h-px bg-zinc-800"></div>

            {/* {profileItems.map((item, index) => (
              <div key={index}>
                <Link
                  className={`w-auto flex gap-3 hover:bg-zinc-900 px-4 py-3 m-2 transition-colors duration-150 rounded-sm text-sm ${
                    item.highlight ? "text-yellow-500" : ""
                  }`}
                  href={item.href}
                >
                  <span>{<item.icon className="w-4" />}</span>
                  {item.name}
                </Link>
              </div>
            ))} */}

            <div
              style={{
                pointerEvents: isMenuOpen ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50% round 10px)",
              }}
              className="my-1- h-px bg-zinc-800"
            ></div>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className={`w-auto flex gap-3 hover:bg-zinc-900 px-4 py-3 m-2 rounded-sm transition-colors duration-150 text-sm`}
                    href={item.href}
                  >
                    <div
                      className={`flex gap-3 ${
                        item.highlight
                          ? "bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-400 hover:bg-yellow-900"
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
                </li>
              ))}
            </ul>

            <div className="my-1- h-px bg-zinc-800"></div>

            <ul className="h-screen">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <li className="w-auto flex gap-3 hover:bg-zinc-900 px-4 py-3 m-2 rounded-sm transition-colors duration-150 text-sm">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </section>
          <Menu>
            <MenuButton className="hidden md:block">
              <div className="rounded-full border-2 border-zinc-700 overflow-hidden">
                <Image
                  src="/profile.png"
                  width={36}
                  height={36}
                  alt="profile photo"
                />
              </div>
            </MenuButton>
            <MenuItems
              anchor="bottom end"
              className=" w-56 rounded-lg bg-zinc-900 border border-zinc-800 mt-2"
            >
              <MenuItem>
                <div className="flex gap-2 h-full bg-zinc-800 p-4 border-b border-zinc-700">
                  <div className="rounded-full border-2 border-zinc-700 overflow-hidden">
                    <Image
                      src="/profile.png"
                      width={44}
                      height={44}
                      alt="profile photo"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-md">Httge ptha</p>
                    <p className="text-xs text-green-500 cursor-pointer">
                      @httge_putha
                    </p>
                  </div>
                </div>
              </MenuItem>
              {profileItems.map((item, index) => (
                <MenuItem key={index}>
                  <Link
                    className={`w-auto flex gap-3 data-[focus]:bg-zinc-800 px-4 py-3 m-2 transition-colors duration-150 rounded-sm text-sm ${
                      item.highlight ? "text-yellow-500" : ""
                    }`}
                    href={item.href}
                  >
                    <span>{<item.icon className="w-4" />}</span>
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
              <MenuSeparator className="my-1- h-px bg-zinc-800" />

              {menuItems.map((item, index) => (
                <MenuItem key={index}>
                  <Link
                    className={`w-auto flex gap-3 data-[focus]:bg-zinc-800 px-4 py-3 m-2 rounded-sm transition-colors duration-150 text-sm`}
                    href={item.href}
                  >
                    <div
                      className={`flex gap-3 ${
                        item.highlight
                          ? "bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-400 data-[focus]:bg-yellow-900"
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
        </div>
      </div>
    </nav>
  );
};
