"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { signIn, signOut, useSession } from "next-auth/react";
import { LogInIcon } from "lucide-react";
import { AccountDropdown } from "./AccountDropdown";

export default function Navbar({ user }: { user: CustomUser | null }) {
  return (
    <nav className="p-6 flex justify-between items-center shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold">BUZZ</h1>
      <div className="flex items-center space-x-2 md:space-x-6 md:gap-2">
        <Link href="/" className="text-gray-200 hover:text-gray-400">
          Home
        </Link>
        <Link href="/features" className="text-gray-200 hover:text-gray-400">
          Features
        </Link>
        {!user ? (
          <Button
            onClick={() => signIn("google")}
            variant="secondary"
            className="gap-1"
          >
            <LogInIcon className="mr-w" /> Sign In
          </Button>
        ) : (
          <>
            <AccountDropdown />
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          </>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}
