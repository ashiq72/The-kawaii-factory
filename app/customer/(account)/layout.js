import AccountHeader from "./AccountHeader";
import Link from "next/link";
import AccountSidebar from "./AccountSidebar";

async function CustomerAccount({ children }) {
  return (
    <div className="">
      <div>
        <AccountHeader />
      </div>
      <div
        style={{ display: "flex" }}
        className="xl:w-3/4 mx-auto bg-slate-100 "
      >
        {/* Sidebar */}

        <AccountSidebar />
        {/* Main content */}
        <div
          className=""
          style={{ flex: 1, padding: "40px", paddingTop: "40px" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default CustomerAccount;
