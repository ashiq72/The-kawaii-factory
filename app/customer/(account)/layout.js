// import AccountHeader from "./AccountHeader";
// import AccountSidebar from "./AccountSidebar";

async function CustomerAccount({ children }) {
  return (
    <div className="">
      <div>{/* <AccountHeader /> */}</div>
      <div className="py-12">
        <div style={{ display: "flex" }} className="xl:w-3/4 mx-auto ">
          {/* Sidebar */}

          {/* <AccountSidebar /> */}
          {/* Main content */}
          <div
            className=" bg-slate-100 rounded"
            style={{ flex: 1, padding: "40px", paddingTop: "40px" }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerAccount;
