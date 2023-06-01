import Modal from "./components/modal/modal";
import { Navbar } from "./components/navbar/navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone using Next JS, tailwind css",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Modal isOpen title="Hello World" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
