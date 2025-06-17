"use client";
import React from "react";
import { AccountDropdown } from "./AccountDropdown";

export default function DashNav() {
  return (
    <nav className="py-6 px-6 flex justify-between items-center shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold">BUZZ</h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
        <AccountDropdown />
      </div>
    </nav>
  );
}
