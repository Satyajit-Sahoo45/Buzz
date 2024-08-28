import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 ">
      <h1 className="text-5xl font-extrabold text-gray-300 mb-4">
        Instant Chat Links for Seamless Conversations
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        BUZZ makes it effortless to create secure chat links and start
        conversations in seconds.
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="animate-pulse">
          Start Chatting
        </Button>
      </Link>

      <div className="mt-12 w-full max-w-5xl flex justify-center">
        <img
          src="/images/conversation.svg"
          alt="Illustration"
          className="w-full h-64"
        />
      </div>
    </section>
  );
}
