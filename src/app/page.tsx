import Navbar from "@/components/base/Navbar";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import HeroSection from "@/components/base/HeroSection";

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar user={session?.user ?? null} />

      <HeroSection />
    </div>
  );
}
