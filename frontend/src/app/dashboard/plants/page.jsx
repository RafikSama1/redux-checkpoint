"use client";

import { EyeIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "../../../lib/axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Plants() {

  const [plants, setPlants] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/plants")
            .then(({data}) => setPlants(data));
    }, []);

    const deletePlant = async (id) => {
        await axios.delete(`http://localhost:8000/plants/${id}`);
        const newPlants = [...plants];
        setPlants(newPlants.filter(plant => plant._id != id));
    };

  return (
    <>
      <h1 className="text-3xl font-semibold underline mb-10">Plants List</h1>
      <div className="flex justify-end">
        <Link href="/dashboard/plants/create">
          <button className="bg-[#475F45] text-white py-2 px-4 rounded-sm font-semibold mt-5 mb-3">
            Add a plant
          </button>
        </Link>
      </div>
      <table className="w-full border table-auto">
        <thead>
          <tr className="text-left p-2 border">
            <th className="p-2 border border-gray-400">Name</th>
            <th className="p-2 border border-gray-400">Type</th>
            <th className="p-2 border border-gray-400">Price</th>
            <th className="p-2 border border-gray-400">Age</th>
            <th className="p-2 border border-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
            <tr key={plant._id} className="custom-table-row">
              <td className="px-2 py-4 border border-gray-400">{plant.name}</td>
              <td className="px-2 py-4 border border-gray-400">{plant.type}</td>
              <td className="px-2 py-4 border border-gray-400">
                {plant.price} (DZD)
              </td>
              <td className="px-2 py-4 border border-gray-400">
                {plant.age} (semaines)
              </td>
              <td className="px-2 py-4 border border-gray-400 flex gap-2">
                <Link href={`/dashboard/plants/${plant._id}/edit`}>
                  <EyeIcon className="size-6 hover:cursor-pointer" />
                </Link>

                <TrashIcon className="size-6 cursor-pointer" onClick={() => deletePlant(plant._id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
