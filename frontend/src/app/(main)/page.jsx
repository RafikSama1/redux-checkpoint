import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { BiLeaf } from "react-icons/bi";


export default function Home() {
  return (
    <>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <button className="bg-[#AC7728] text-white px-4 py-1 md:px-8 md:py-[6px] rounded-full text-sm font-medium" >Plant</button>
          <h1 className="text-3xl md:text-5xl font-medium mt-3 text-[#343D33]">Grow Plants To <br />Please Your Soul</h1>
          <p className="text-[#727671] text-xs md:text-sm font-semibold my-4 md:my-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Iste deserunt consectetur soluta quidem saepe. Beatae <br />
            nesciunt nemo rem est nesciunt nemo em est.
          </p>
          <div className="flex gap:-3 md:gap-5">

            <button className="bg-[#475F45] px-2 md:py-3 md:px-4 rounded-md flex gap-2 items-center">
              <ShoppingCartIcon className="size-4 md:size-5 text-white" />
              <span className="text-white text-xs md:text-sm font-medium">Shop Now</span>
            </button>

            <button className="py-3 px-4 rounded-md flex gap-2 items-center">
              <span className="text-[#475F45] text-sm font-semibold">Care Tips</span>
              <BiLeaf className="size-5 fill-[#475F45]" />
            </button>

          </div>
        </div>
        <img className="rounded-full h-72 w-72 md:h-96 md:w-96 mt-10 md:mt-0" src="/bg.jpg" alt="Image of an interior room with plants" />
      </div>

      <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-3">
        <div className="px-8 bg-white-500 shadow-md">
          <div className="flex items-center">
            <img className="w-28 md:w-40" src="/pot1.jpg" alt="" />
            <div>
              <h2 className="text-xl text-[#475F45] font-semibold mb-2">Plants for Interiors</h2>
              <div className="flex gap-2 items-center">
                <BiLeaf className="size-5 fill-[#475F45]" />
                <span className="text-[#475F45] text-sm font-light">Care Tips</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 bg-white-500 shadow-md">
          <div className="flex items-center">
            <img className="w-28 md:w-40" src="/pot1.jpg" alt="" />
            <div>
              <h2 className="text-xl text-[#475F45] font-semibold mb-2">Plants for Interiors</h2>
              <div className="flex gap-2 items-center">
                <BiLeaf className="size-5 fill-[#475F45]" />
                <span className="text-[#475F45] text-sm font-light">Care Tips</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 bg-white-500 shadow-md">
          <div className="flex items-center">
            <img className="w-28 md:w-40" src="/pot1.jpg" alt="" />
            <div>
              <h2 className="text-xl text-[#475F45] font-semibold mb-2">Plants for Interiors</h2>
              <div className="flex gap-2 items-center">
                <BiLeaf className="size-5 fill-[#475F45]" />
                <span className="text-[#475F45] text-sm font-light">Care Tips</span>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* <div className="absolute bottom-0 right-0 w-screen h-[80px] bg-[#475F45]"></div> */}
    </>
  );
}
