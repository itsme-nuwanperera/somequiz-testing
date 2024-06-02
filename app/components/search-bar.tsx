import React from "react";

export function SearchBar() {
  return (
    <div className="absolute top-2/4 flex items-center justify-center">
      <input
        type="search"
        className="bg-zinc-900 text-zinc-100 placeholder-zinc-400 border border-zinc-700 rounded-lg px-4 py-2 w-96"
        placeholder="Search"
      />
    </div>
  );
}
