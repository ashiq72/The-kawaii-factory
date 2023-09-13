import "@styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TextScrolling from "@components/Shared/InfiniteScrolling/TextScrolling";

import { ThemeContextProvider } from "./context/store";
import Footer from "@components/Shared/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "@redux/app/store";

export const metadata = {
  title: "Clerk-Organizations",
  description: "Clerk role Based Authentication Using Organizations",
};

export default function RootLayout({ children }) {
  return (
    // <Provider store={store}>
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
    // </Provider>
  );
}
