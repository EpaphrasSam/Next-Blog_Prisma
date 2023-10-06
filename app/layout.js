import { config } from "dotenv";
config({ path: ".env.local" });

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AuthProvider from "../hooks/AuthProvider";
import ThemeProviders from "../hooks/ThemeProviders";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogosphere",
  description: "A Modern Blog Website for the millenials!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <AuthProvider>
          <ThemeProviders attribute="class">
            <div className="min-h-screen bg-white dark:bg-dark dark:text-[#ddd] text-black">
              <div className="max-w-[1536px] mx-auto  px-20 max-2xl:max-w-[1366px] max-xl:max-w-[1024px] max-lg:max-w-[768px] max-lg:px-10 max-md:max-w-[640px] max-sm:max-w-[475px]">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
