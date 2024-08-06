"use client";

import axios from "../../../lib/axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateProduct({params}) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/plants/${params.id}`)
            .then(({data}) => {
                setName(data.name);
                setType(data.type);
                setAge(data.age);
                setPrice(data.price);
                setDescription(data.description);
            });
    }, []);

    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            type,
            age,
            price,
            description,
            image
        };
        await axios.putForm(`http://localhost:8000/plants/${params.id}`, data);
        router.push('/dashboard/plants');
    }
    return (
        <>
            <h1 className="text-3xl font-semibold underline mb-10">Create a plant</h1>
            <form onSubmit={submit}>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Name</label>
                    <input className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Type</label>
                    <select className="bg-[#475F45] text-white outline-none py-2 px-3 rounded-sm" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="" disabled>Select a value</option>
                        <option>Indoor</option>
                        <option>Outdoor</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Age</label>
                    <input className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm" type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Price</label>
                    <input className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm" type="text" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Description</label>
                    <textarea className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-black font-bold text-md">Image</label>
                    <input className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm" type="file" onChange={(e) => setImage(e.target.files[0])} required/>
                </div>
                <div className="flex gap-3">
                <button type="submit" className="bg-[#475F45] text-white py-2 px-4 rounded-sm font-semibold mt-5">Submit</button>
                <Link href="/dashboard/plants">
                    <button className="bg-[#475F45] text-white py-2 px-4 rounded-sm font-semibold mt-5">Cancel</button>
                </Link>
                </div>
            </form>
        </>
    )
}