"use client";
import React from "react";
import {
  authOptions,
  CustomSession,
} from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { AccountDropdown } from "./AccountDropdown";
import { useSession } from "next-auth/react";

export default function DashNav() {
  const session = useSession();
  return (
    <nav className="py-6 px-6 flex justify-between items-center shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold">BUZZ</h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
        <AccountDropdown />
      </div>
    </nav>
  );
}
