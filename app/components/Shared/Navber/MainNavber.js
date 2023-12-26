import { auth, currentUser } from "@clerk/nextjs";
import Navber from "./Navber";

const MainNavber = async () => {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <>
      <Navber userImg={user?.imageUrl} userId={userId} />
    </>
  );
};

export default MainNavber;
