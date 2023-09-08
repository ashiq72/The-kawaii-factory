import { auth, currentUser } from "@clerk/nextjs";
import UserInfoGet from "./UserInfoGet";

const User = async () => {
  const user = await currentUser();
  console.log(user);
  return (
    <div>
      <UserInfoGet user={user} />
    </div>
  );
};

export default User;
