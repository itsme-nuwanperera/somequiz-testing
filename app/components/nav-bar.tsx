"use client";

import React, { useEffect, useState } from "react";
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
import { stagger, useAnimate, useCycle } from "framer-motion";

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

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

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

  function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      const menuAnimations = isOpen
        ? [
            [
              "nav",
              { transform: "translateX(0%)" },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
            ],
            [
              "li",
              { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
              { delay: stagger(0.05), at: "-0.1" },
            ],
          ]
        : [
            [
              "li",
              { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
              { delay: stagger(0.05, { from: "last" }), at: "<" },
            ],
            ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
          ];

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

  return (
    <nav ref={scope} className="fixed w-full items-center justify-center">
      <div className="flex items-center justify-between max-w-screen-2xl h-16 bg-green-50 p-4 mx-auto">
        {/* logo & nav links */}
        <div className="flex items-center gap-4">
          <Logo className="w-10 h-10" />
          <p className="text-lg font-medium">somequiz</p>
          <ul className="flex gap-2 pl-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium p-2 hover:bg-green-100 rounded-md transition-colors duration-150"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* profile icon */}
        <div className="flex items-center">
          {" "}
          <button className="w-9 h-9 rounded-full overflow-hidden border">
            <Image src="/profile.png" alt="profile" width={36} height={36} />
          </button>
          {/* hamburger icon */}
          <MenuToggle
            toggle={() => {
              setIsOpen(!isOpen);
              console.log("clicked");
            }}
          />
        </div>
      </div>
    </nav>
  );
}
