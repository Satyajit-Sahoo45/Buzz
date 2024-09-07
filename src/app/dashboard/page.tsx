"use client";

import DashNav from "@/components/base/DashNav";
import CreateChat from "@/components/ChatGroup/CreateChat";
import { useSession } from "next-auth/react";
import React from "react";

export default function Dashboard() {
  const session = useSession();
  if (!session.data) {
    return;
  }
  const sessionData = session.data;
  return (
    <div>
      <DashNav />

      <div className="container">
        <div className="mt-6 text-end">
          {sessionData.user && <CreateChat user={sessionData?.user} />}
        </div>
      </div>
    </div>
  );
}
