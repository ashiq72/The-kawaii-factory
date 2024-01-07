import { getServerSession } from "next-auth";
import AccountInformation from "./AccountInformation";

async function page() {
  // ---------------------------------------------
  // const [data, setData] = useState({});
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/ClientMember");
  //   },
  // });
  // console.log(session?.user);

  const session = await getServerSession();

  return (
    <div>
      <AccountInformation session={session} />
    </div>
  );
}

export default page;
