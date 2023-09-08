import { SignedOut, UserButton, SignedIn } from "@clerk/nextjs";

export default function ProfileNav() {
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
        <div className="ml-0">
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </div>
  );
}
