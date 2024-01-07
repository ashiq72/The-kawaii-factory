import { getServerSession } from "next-auth";
import EditDefaultAdd from "./EditDefaultAdd";

async function page() {
  const session = await getServerSession();
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
        <EditDefaultAdd email={session?.user?.email} />
      </div>
    </div>
  );
}

export default page;
