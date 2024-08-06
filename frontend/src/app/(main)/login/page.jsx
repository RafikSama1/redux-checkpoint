"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();
    try {
        const {data} = await axios.post('http://localhost:8000/login', {email, password});
        localStorage.setItem('token', data.token);
        router.push('/dashboard');
    } catch {
        setError('Wrong email or password');
    }
    
  };


  return (
    <div className="h-[60vh]">
      <h1 className="font-semibold text-4xl text-center my-20">Login Page</h1>
      <form onSubmit={login} className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-1 my-2">
          <label className="text-black font-bold text-md">Email</label>
          <input
            className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 my-2">
          <label className="text-black font-bold text-md">Password</label>
          <input
            className="bg-[#475F45] text-white outline-none py-1 px-3 rounded-sm"
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 my-2">
         {error && <p className="text-sm text-red-500">{error}</p> }
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#475F45] text-white py-2 px-4 rounded-sm font-semibold mt-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
