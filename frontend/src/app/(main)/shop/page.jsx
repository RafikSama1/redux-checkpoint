import AddToCart from "@/components/AddToCart";
import axios from "axios"
import Link from "next/link";

export default async function Shop() {
    const resp = await axios.get('http://localhost:8000/plants');
    const plants = resp.data;
    return (
        <div className="min-h-[50vh]">
            <div className="grid grid-cols-3 gap-10">
                {
                    plants.map(plant => (
                        <div className="group relative border border-[#475F45]" key={plant._id}>
                            <img className=" w-full h-52 object-cover" src={`http://localhost:8000/${plant.image}`} alt="" />
                            <div className="p-2">
                                <div className="flex justify-between">
                                    <Link href={`/shop/${plant._id}`}><h1 className="text-xl font-semibold">{plant.name}</h1></Link>
                                    <h3 className="text-md">{plant.price} <span className="text-sm">(DZD)</span></h3>
                                </div>
                                <h3 className="text-md">{plant.type}</h3>
                                <AddToCart plant={plant}/>
                            </div>
                        </div>  
                    ))
                }
            </div>
        </div>
    )
}