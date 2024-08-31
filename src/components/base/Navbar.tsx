"use client";
import React, { useState } from "react";
import Link from "next/link";
import LoginModal from "../auth/LoginModal";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DeleteIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function AccountDropdown() {
  const session = useSession();
  const isLoggedIn = !!session.data;

  const [open, setOpen] = useState(false);

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove your
              account and any data your have.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                // await deleteAccountAction();
                signOut({ callbackUrl: "/" });
              }}
            >
              Yes, delete my account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"link"}>
            <Avatar className="mr-2">
              <AvatarImage src={session.data?.user?.image ?? ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {session.data?.user?.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {isLoggedIn ? (
            <>
              <DropdownMenuItem
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
              >
                <LogOutIcon className="mr-2" /> Sign Out
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setOpen(true);
                }}
              >
                <DeleteIcon className="mr-2" /> Delete Account
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem onClick={() => signIn("google")}>
              <LogInIcon className="mr-2" /> Sign In
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

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
