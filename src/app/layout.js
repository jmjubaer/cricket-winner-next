import { Onest } from "next/font/google";
import "./globals.css";
import TopNav from "@/Page/Shered/TopNav";
import MainNav from "@/Page/Shered/MainNav";
import Footer from "@/Page/Shered/Footer";

const onest = Onest({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={onest.className}>
                <header>
                    <TopNav></TopNav>
                    <MainNav></MainNav>
                </header>
                <main className="bg-[#FBFBFB] min-h-[calc(100vh-150px)]">
                  {children}
                </main>
                <footer className="bg-black text-white">
                    <Footer></Footer>
                </footer>
            </body>
        </html>
    );
}
