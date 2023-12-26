import { UserProfile } from "@clerk/nextjs";
import React from "react";

function UserSetting() {
  return (
    <div className="flex items-center justify-center mt-8">
      <UserProfile />
    </div>
  );
}

export default UserSetting;
