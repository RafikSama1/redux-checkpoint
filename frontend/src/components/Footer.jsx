
export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row w-screen">
            <div className="bg-[#EAF1EA] w-full md:w-1/3 py-14 px-20 flex flex-col justify-center items-center gap-y-5">
            <img className="w-20 h-auto" src="/logo.png" alt="GreenLeaf logo" />
               <p className="text-sm font-medium text-[#6F836E]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quis assumenda quos sint mollitia nihil consequatur?
               </p>
            </div>

            <div className="bg-[#475F45] w-full md:w-2/3 py-14 flex flex-col md:flex-row justify-center items-start gap-5 md:gap-28">
                <div className="ml-28 md:ml-0">
                    <h3 className="text-white text-lg font-bold">About us</h3>
                    <ul>
                        <li className="list-none my-2 text-white text-sm font-light">Booking System</li>
                        <li className="list-none my-2 text-white text-sm font-light">Shop</li>
                        <li className="list-none my-2 text-white text-sm font-light">Cart</li>
                        <li className="list-none my-2 text-white text-sm font-light">Item</li>
                    </ul>
                </div>

                <div className="ml-28 md:ml-0">
                    <h3 className="text-white text-lg font-bold">Support</h3>
                    <ul>
                        <li className="list-none my-2 text-white text-sm font-light">FAQs</li>
                        <li className="list-none my-2 text-white text-sm font-light">Shopping & Features</li>
                        <li className="list-none my-2 text-white text-sm font-light">Care Outside</li>
                    </ul>
                </div>

                <div className="ml-28 md:ml-0">
                    <h3 className="text-white text-lg font-bold">Contact Us</h3>
                    <ul>
                        <li className="list-none my-2 text-white text-sm font-light">email@example.com</li>
                        <li className="list-none my-2 text-white text-sm font-light">+213 555 555 555</li>
                    </ul>
                </div>
            
            </div>
        </footer>
    )
}