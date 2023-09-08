import "@styles/globals.css";
import Navbar from "@components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

import TextScrolling from "@components/InfiniteScrolling/TextScrolling";
import { Footer } from "@components";

export const metadata = {
  title: "Clerk-Organizations",
  description: "Clerk role Based Authentication Using Organizations",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <TextScrolling />
            {/* <Navbar /> */}
            {/* <TopNavbar /> */}
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
