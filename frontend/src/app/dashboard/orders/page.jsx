"use client";

import { EyeIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function Orders() {

  const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("/orders")
            .then(({data}) => setOrders(data));
    }, []);

    const deleteOrder = async (id) => {
        await axios.delete(`/orders/${id}`);
        const newOrders = [...orders];
        setOrders(newOrders.filter(order => order._id != id));
    };

  return (
    <>
      <h1 className="text-3xl font-semibold underline mb-10">Orders List</h1>
      <div className="flex justify-end">
      </div>
      <table className="w-full border table-auto">
        <thead>
          <tr className="text-left p-2 border">
            <th className="p-2 border border-gray-400">Name</th>
            <th className="p-2 border border-gray-400">Address</th>
            <th className="p-2 border border-gray-400">Phone</th>
            <th className="p-2 border border-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="custom-table-row">
              <td className="px-2 py-4 border border-gray-400">{order.name}</td>
              <td className="px-2 py-4 border border-gray-400">{order.address}</td>
              <td className="px-2 py-4 border border-gray-400">{order.phone}</td>
              <td className="px-2 py-4 border border-gray-400 flex gap-2">
                <Link href={`/dashboard/orders/${order._id}`}>
                  <EyeIcon className="size-6 hover:cursor-pointer" />
                </Link>

                <TrashIcon className="size-6 cursor-pointer" onClick={() => deleteOrder(order._id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
