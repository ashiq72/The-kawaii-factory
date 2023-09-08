// "use client";
import { SignedOut, UserButton, SignedIn, currentUser } from "@clerk/nextjs";
import ProfilePhoto from "./ProfilePhoto";

const ProfileNav = () => {
  return (
    <div className="md:flex items-center">
      <SignedOut>
        <a href="/sign-in">
          <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mr-4">
            Login
          </button>
        </a>
        <a href="/sign-up">
          <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base">
            Sign Up
          </button>
        </a>
      </SignedOut>
      <SignedIn>
        {/* <div className="ml-0">
          <UserButton afterSignOutUrl="/" />
        </div> */}
        <div className="dropdown dropdown-end dropdown-hover">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
              <ProfilePhoto />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                {/* <span className="badge">New</span> */}
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </SignedIn>
    </div>
  );
};
export default ProfileNav;
