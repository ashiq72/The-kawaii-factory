import { currentUser } from "@clerk/nextjs";
import EditDefaultAddress from "./EditDefaultAddress";

async function DefaultAddressEdit() {
  const user = await currentUser();
  const email = user.emailAddresses[0].emailAddress;
  const firstName = user.firstName;

  return (
    <div>
      <div>
        <h1 className=" font-bold text-lg">Account Information</h1>
        <p className="text-sm text-gray-500 font-sans">
          This section contains your address information
        </p>
      </div>
      {/* Personal Information */}
      <div className="bg-white rounded mt-4">
        <div className="border-b-2 p-4 px-6 flex justify-between items-center">
          <h2 className="font-semibold">Default Information</h2>
        </div>
        <EditDefaultAddress email={email} firstName={firstName} />
      </div>
    </div>
  );
}

export default DefaultAddressEdit;
