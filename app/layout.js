import "@styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TextScrolling from "@components/Shared/InfiniteScrolling/TextScrolling";

import { ThemeContextProvider } from "./context/store";
import Footer from "@components/Shared/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "@redux/app/store";
import TopNavbar from "@components/Shared/MainTopNavber/TopNavber";
import Header from "@utils/Header";

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

            {/* <TopNavbar /> */}
            <Header />
            <ThemeContextProvider>{children}</ThemeContextProvider>
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
    // </Provider>
  );
}
