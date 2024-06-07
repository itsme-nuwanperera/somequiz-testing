"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

export default function ShiftingDropDown() {
  return (
    <div className="flex h-96 w-full bg-natural-950 p-8 text-neutral-200 justify-center">
      <Tabs />
    </div>
  );
}

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const handleTabSelected = (id: number | null) => {
    if (typeof id === "number" && typeof selected === "number") {
      setDirection(id > selected ? "right" : "left");
    } else if (id === null) {
      setDirection(null);
    }
    setSelected(id);
  };

  return (
    <div
      onMouseLeave={() => handleTabSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {/* Render all tabs */}
      {TABS.map((tab) => {
        return (
          <Tab
            key={tab.id}
            tab={tab.id}
            handleSetSelected={handleTabSelected}
            selected={selected}
          >
            {tab.title}
          </Tab>
        );
      })}
      {/* Render content */}
      <AnimatePresence>
        {selected && <Content direction={direction} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Content = ({
  direction,
  selected,
}: {
  direction: "left" | "right" | null;
  selected: number;
}) => {
  return (
    <motion.div
      id="overlay-content"
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-border bg-background p-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <Bridge />
      <Nub selected={selected} />
      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x:
                    direction === "left"
                      ? 100
                      : direction === "right"
                      ? -100
                      : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Nub = ({ selected }: { selected: number }) => {
  const nubRef = useRef<null | HTMLSpanElement>(null);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");
      if (!hoveredTab || !overlayContent || !nubRef.current) return;
      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();
      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      ref={nubRef}
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-zinc-300 bg-background"
    />
  );
};

const Bridge = () => {
  return <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />;
};

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: React.ReactNode;
  tab: number;
  handleSetSelected: (id: number | null) => void;
  selected: number | null;
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`group flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-normal transition-colors ${
        selected === tab
          ? "bg-zinc-200 text-neutral-900"
          : "text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <ChevronUpIcon
        className={`h-4 w-4 transition-all duration-200 ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const ExampleComponents = () => {
  return <div className="text-7xl text-zinc-400">helloo</div>;
};

const TABS = [
  {
    title: "Courses",
    Component: ExampleComponents,
  },
  {
    title: "Pricing",
    Component: ExampleComponents,
  },
  {
    title: "Blog",
    Component: ExampleComponents,
  },
].map((n, index) => ({ ...n, id: index + 1 }));
