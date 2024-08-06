"use client";

import axios from "@/lib/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateProduct({ params }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/orders/${params.id}`).then(({ data }) => {
      setName(data.name);
      setPhone(data.phone);
      setAddress(data.address);
      setItems(data.items);
    });
  }, []);

  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 className="text-3xl font-semibold underline mb-10">View Order</h1>
      <form onSubmit={submit}>
        <div className="flex flex-col gap-1 my-3">
          <label className="text-black font-bold text-md">Name</label>
          <input
            className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1 my-3">
          <label className="text-black font-bold text-md">Address</label>
          <input
            className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1 my-3">
          <label className="text-black font-bold text-md">Phone</label>
          <input
            className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1 my-3">
          <label className="text-black font-bold text-md">Plants</label>
          <table className="w-full border table-auto">
        <thead>
          <tr className="text-left p-2 border">
            <th className="p-2 border border-gray-400">Name</th>
            <th className="p-2 border border-gray-400">Type</th>
            <th className="p-2 border border-gray-400">Price</th>
            <th className="p-2 border border-gray-400">Age</th>
            <th className="p-2 border border-gray-400">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.plant._id}>
              <td className="px-2 py-4 border border-gray-400">{item.plant.name}</td>
              <td className="px-2 py-4 border border-gray-400">{item.plant.type}</td>
              <td className="px-2 py-4 border border-gray-400">
                {item.plant.price} (DZD)
              </td>
              <td className="px-2 py-4 border border-gray-400">
                {item.plant.age} (semaines)
              </td>
              <td className="px-2 py-4 border border-gray-400">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </form>
    </>
  );
}
