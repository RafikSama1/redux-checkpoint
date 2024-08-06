"use client";

import { addItem, addQuantity, clearItems, minusQuantity } from "@/lib/cartSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce(
    (n, item) => n + item.quantity * item.plant.price,
    0
  );
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const makeOrder = async(e) => {
    e.preventDefault();
    const data = {
      name,
      address,
      phone,
      items: items.map(item => {
        return {
          plant: item.plant._id,
          quantity: item.quantity
        }
      })
    }
    const resp = await axios.post('http://localhost:8000/orders', data);
    dispatch(clearItems());
    router.push('/shop');
  };

  return (
    <>
      <div className="flex justify-evenly items-center gap-20 min-h-[60vh]">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-4xl font-bold">My Cart</h1>
          <ul>
            {items.length ? (
              <>
                {items.map((item) => (
                  <li key={item.plant._id}>
                    <div className="w-full flex p-1 pr-4 border gap-5 items-center">
                      <img
                        className="w-56 h-40 border-r pr-2"
                        src={`http://localhost:8000/${item.plant.image}`}
                        alt=""
                      />
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl">{item.plant.name}</h3>
                        <div>
                          <h4 className="text-sm">
                            Price: {item.plant.price}{" "}
                            <span className="text-xs">DZD</span>
                          </h4>
                          <h4 className="text-sm">Quantity: {item.quantity}</h4>
                          <h4 className="text-sm">
                            Total: {item.plant.price * item.quantity}{" "}
                            <span className="text-xs">DZD</span>
                          </h4>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              dispatch(addQuantity(item.plant._id))
                            }
                            className="bg-[#475F45] text-white py-1 px-1 rounded-sm font-semibold w-full"
                          >
                            +
                          </button>
                          <button
                            onClick={() =>
                              dispatch(minusQuantity(item.plant._id))
                            }
                            className="bg-[#475F45] text-white py-1 px-1 rounded-sm font-semibold w-full"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                <h1 className="text-lg my-2">
                  Total is: {total} <span className="text-sm">DZD</span>
                </h1>
              </>
            ) : (
              <h2 className="text-xl font-semibold">Cart is empty</h2>
            )}
          </ul>
        </div>

        {
          items.length > 0 && 
        <form onSubmit={makeOrder} className="flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-1 my-2">
            <label className="text-black font-bold text-md">Name</label>
            <input
              className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 my-2">
            <label className="text-black font-bold text-md">Address</label>
            <input
              className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm"
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1 my-2">
            <label className="text-black font-bold text-md">Phone</label>
            <input
              className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm"
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-[#475F45] text-white py-2 px-4 rounded-sm font-semibold mt-5"
            >
              Submit
            </button>
          </div>
        </form>
      }
      </div>
    </>
  );
}
