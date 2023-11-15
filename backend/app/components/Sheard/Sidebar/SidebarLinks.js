import React from "react";

const SidebarLinks = async () => {
  return (
    <div>
      <div>
        {/* User Image */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
          {/* <img
            className="object-cover object-center w-full h-full"
            src={users[0].image}
            alt="User"
          /> */}
        </div>

        {/* User Details */}
        <div className="my-4 text-center">
          {/* <h2 className="text-xl font-bold text-white">{users[0].name}</h2> */}
          {/* <p className="text-xl text-gray-600">{users[0].email}</p> */}
          {/* <p className="text-lg text-indigo-500">Role: {users[0].role}</p> */}
        </div>
      </div>
    </div>
  );
};

export default SidebarLinks;
