import React from "react";
import { auth, currentUser } from "@clerk/nextjs";

const CurrentUser = async () => {
  const user = await currentUser();
  const users = [
    {
      id: 1,
      name: `${user.firstName} ${user.lastName}`,
      image: user.imageUrl,
    },
  ];

  return (
    <div>
      <img
        className="object-cover object-center w-full h-full"
        src={users[0].image}
        alt="User"
      />
    </div>
  );
};

export default CurrentUser;
