import EditPersonalInfo from "./EditPersonalInformation";
import { getServerSession } from "next-auth";

async function EditPersonalInformation() {
  const session = await getServerSession();
  // console.log(session?.user);

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
          <h2 className="font-semibold">Personal Information</h2>
        </div>
        <EditPersonalInfo session={session} />
      </div>
    </div>
  );
}

export default EditPersonalInformation;
