import "../globals.css";

import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Photography Blog",
  description:
    "A blog to share my photography and the stories behind the photos.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

import Navbar from "@/app/components/navbar";
import { PageTransition } from "./PageTransition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="p-2 h-full w-screen overflow-hidden bg-primary ">
        <div
          className="
            h-full w-full flex flex-grow flex-col border-2 border-secondary relative
          "
        >
          <div className="flex-1 overflow-y-auto">
            <PageTransition>{children}</PageTransition>
          </div>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
