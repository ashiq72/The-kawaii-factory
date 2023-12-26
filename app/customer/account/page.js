import AccountHeader from "./AccountHeader";
import { auth, currentUser } from "@clerk/nextjs";

async function CustomerAccount() {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <div>
      <div>
        <AccountHeader user={user} />
      </div>
      <div></div>
    </div>
  );
}

export default CustomerAccount;
