import React from "react";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import GroupChatCardMenu from "./GroupChatCardMenu";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function GroupChatCard({
  group,
  user,
}: {
  group: GroupChatType;
  user: CustomUser;
}) {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center ">
        <CardTitle className="text-2xl">{group.title}</CardTitle>
        <GroupChatCardMenu user={user} group={group} />
      </CardHeader>
      <CardContent>
        <p>
          Passcode :-<strong>{group.passcode}</strong>
        </p>
        <p>Created At :-{new Date(group.created_at).toDateString()}</p>
      </CardContent>
    </Card>
  );
}
