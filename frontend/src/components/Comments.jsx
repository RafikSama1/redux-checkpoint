"use client";

import axios from "axios";
import { useState } from "react"


export default function Comments(props) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(props.comments);

    const addComment = async(e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8000/plants/${props.id}/comment`, {comment});
        setComments([...comments, comment]);
        setComment('');
    }

    return (
        <div className="bg-green-300 border-t border-green-800 mt-10 p-5">
            <h1 className="font-light tracking-wide text-2xl">Comment section</h1>
            <ol>
                {
                    comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))
                }
            </ol>
            <form onSubmit={addComment}>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} required /> <br />
                <button className="bg-green-600 px-4 py-2 text-white my-2 rounded">Send</button>
            </form>
        </div>

    )
}