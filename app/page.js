import { currentUser } from "@clerk/nextjs";

import Home from "@components/Home/Home";
import ProfilePhoto from "@components/Shared/MainTopNavber/ProfilePhoto";

const HomePage = async () => {
  const user = await currentUser();
  return (
    <main className="overflow-hidden">
      <Home />
    </main>
  );
};
export default HomePage;
