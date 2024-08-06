"use client";

import Link from "next/link";
import "../globals.css";
import LogoutButton from "@/components/LogoutButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function DashboardLayout({ children }) {
  
  const router = useRouter();

    if(window) {
      const token = localStorage.getItem('token');
      if(!token) {
        return router.push('/login');
      }
    }
    
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row">
          <nav>
            <div className="bg-[#475F45] h-screen w-56 pt-10 px-5 min-h-full">
              <Link href="/"><h1 className="text-white font-bold text-3xl mb-5 hover:text-black hover:cursor-pointer">Green Leaf</h1></Link>
              <ul>
                <li className="text-white font-semibold text-lg hover:cursor-pointer hover:text-black hover:bg-[#698667] p-1">
                  <Link className="inline-block w-full" href="/dashboard/plants">Plants</Link>
                </li>
                <li className="text-white font-semibold text-lg hover:cursor-pointer hover:text-black hover:bg-[#698667] p-1">
                  <Link className="inline-block w-full"  href="/dashboard/orders">Orders</Link>
                </li>
                <li className="text-white font-semibold text-lg hover:cursor-pointer hover:text-black hover:bg-[#698667] p-1">
                  <LogoutButton/>
                </li>
              </ul>
            </div>
          </nav>
          <main className="w-full p-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
