import "@styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TextScrolling from "@components/InfiniteScrolling/TextScrolling";
import { Footer } from "@components";
import { RouterProvider } from "react-router-dom";
import { ThemeContextProvider } from "./context/store";

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
            <ThemeContextProvider>{children}</ThemeContextProvider>
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
