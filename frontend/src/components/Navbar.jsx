"use client";

import {Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const itemsCount = useSelector(state => state.cart.items).reduce((n, {quantity}) => n + quantity, 0);
    return (
        <header className="py-8 md:py-4">
                <nav className="flex flex-col md:flex-row justify-between items:start md:items-center max-w-6xl mx-auto">
                    <div className="flex items-center gap-2 mb-3 md:mb-0">
                        <img className="w-12 h-auto" src="/logo.png" alt="GreenLeaf logo" />
                        <h1 className="text-xl font-bold text-[#475F45] ">GreenLeaf</h1>
                        <Bars3Icon className="block ml-20 md:hidden size-8 text-[#475F45] hover:cursor-pointer" onClick={() => setShowMenu(!showMenu)}/>
                    </div>

                    

                    <ul className={`${showMenu ? 'block' : 'hidden'} md:block shadow-sm md:shadow-none`}>
                        <li className="block md:inline-block mx-3 text-md text-[#6F836E] font-medium"><Link href="/">Home</Link></li>
                        <li className="block md:inline-block mx-3 text-md text-[#9FA39F] font-medium"><Link href="/shop">Plants</Link></li>
                        <li className="block md:inline-block mx-3 text-md text-[#9FA39F] font-medium">Checkout</li>
                    </ul>

                    <div className="hidden md:flex gap-10 items-center">   
                           <UserIcon className="size-6 text-[#475F45]"/>
                           <MagnifyingGlassIcon className="size-6 text-[#475F45]"/>
                           <Link href="/cart">
                            <div className="relative">
                                    <ShoppingCartIcon className="size-6 text-[#475F45] hover:cursor-pointer"/>
                                    <span className="absolute top-[-10px] right-0 text-xs rounded bg-[#475F45] text-white p-0.5">{itemsCount}</span>
                            </div>
                           </Link>
                    </div>

                    
                </nav>
        </header>
    )
}