import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Componentpage from "@/component/componentpage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-6">

        <Componentpage />
        <h1>new branch</h1>

      </main>
 
  );
}


