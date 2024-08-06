"use client";

import { addItem } from "@/lib/cartSlice";
import { useDispatch } from "react-redux";

export default function AddToCart({ plant }) {
    const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(addItem(plant))} className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-1 left-1 bg-[#475F45] text-white py-1 px-2 rounded-sm text-sm font-semibold">
      Add to cart
    </button>
  );
}
