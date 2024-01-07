import React from "react";

function AccountCreditNote() {
  return (
    <div>
      <div>
        <h1 className=" font-bold text-lg">CREDIT NOTE</h1>
      </div>
      <div className=" bg-white mt-2 rounded ">
        <div className="font-semibold border-b-2 px-4 py-3 border-gray-100">
          Summary
        </div>
        <div className="px-4 py-8">
          <p className="font-sans text-base">Your Balance Is Tk 0.00</p>
        </div>
      </div>
    </div>
  );
}

export default AccountCreditNote;
