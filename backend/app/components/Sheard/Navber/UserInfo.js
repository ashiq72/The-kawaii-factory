import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

const UserInfo = async () => {
  const { userId } = auth();
  const user = await currentUser();
  return <div>UserInfo</div>;
};

export default UserInfo;
