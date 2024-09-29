import ChatBase from "@/components/chat/ChatBase";

import { fetchChatGroup, fetchChatGroupUsers } from "@/fetch/groupFetch";
import { notFound } from "next/navigation";
import React from "react";

export default async function chat({ params }: { params: { id: string } }) {
  return (
    <div>
      {/* <ChatBase group={chatGroup} users={chatGroupUsers} oldMessages={chats} /> */}
      Chatbase
    </div>
  );
}
