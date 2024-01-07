import { getServerSession } from "next-auth";
import AccountInformation from "./AccountInformation";

async function page() {
  const session = await getServerSession();

  return (
    <div>
      <AccountInformation session={session} />
    </div>
  );
}

export default page;
