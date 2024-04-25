import "@/styles/globals.css";
import { Red_Hat_Display } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Provider from "@/context/client-provider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ToastProvider from "@/components/ToastProvider";
const inter = Red_Hat_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Giddaa",
  description: "Giddaa - Buy Homes In Nigeria On Various Payment Plans",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/giddaa-logo.png" />
      </head>
      <body className={inter.className}>
        <Provider session={session}>
          <ToastProvider>{children}</ToastProvider>
        </Provider>
      </body>
    </html>
  );
}
