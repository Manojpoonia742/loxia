import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loxia",
  description:
    "Welcome to Loxia! Your go-to destination for all things tech,where you wll find the latest news, cutting-edge technologies,and practical solutions to empower your digital world. Whether you are a tech enthusiast, a professional seeking insights, or someone looking for answers to your tech-related questions, we have got you covered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
