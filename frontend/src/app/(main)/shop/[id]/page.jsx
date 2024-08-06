import Comments from "@/components/Comments";
import axios from "axios";

export default async function SinglePlant({params}) {
    const resp = await axios.get('http://localhost:8000/plants/' + params.id);
    const plant = resp.data;

    return (
        <>
            <h1>{plant.name}</h1>
            <img src={`http://localhost:8000/${plant.image}`} alt="" />
            <Comments comments={plant.comments} id={plant._id}/>
        </>
    )
}