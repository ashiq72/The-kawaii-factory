import { auth, currentUser } from "@clerk/nextjs";
import React from "react";
import Navber from "./Navber";

const MainNavber = async () => {
  const user = await currentUser();

  const users = [
    {
      id: 1,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      role: "User", // You can update this based on your application's logic
      image: user.imageUrl,
    },
    // Add more users as needed
  ];
  return (
    <div>
      <Navber users={users} />
    </div>
  );
};

export default MainNavber;
