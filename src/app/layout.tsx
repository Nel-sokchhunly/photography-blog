import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <div className="p-2 h-screen w-screen overflow-hidden bg-primary ">
          <div className="h-full flex flex-col relative border-2 border-secondary">
            <div
              className="
                h-full w-full
              "
            >
              {children}
            </div>

            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}
