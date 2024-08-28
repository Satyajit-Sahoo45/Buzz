import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { DialogDescription } from "@radix-ui/react-dialog";
import { signIn } from "next-auth/react";

const handleGoogleLogin = async () => {
  signIn("google", {
    redirect: true,
    callbackUrl: "/",
  });
};

export default function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Getting start</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to BUZZ</DialogTitle>
          <DialogDescription>Login</DialogDescription>
        </DialogHeader>
        <Button variant="outline" onClick={handleGoogleLogin}>
          <Image
            src="/images/google.png"
            className=" mr-4"
            width={25}
            height={25}
            alt="google"
          />
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
}
