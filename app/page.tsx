'use client'
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState(null)

  const handleCalculate = async () => {
    const repsonse = await axios.get(`/api/translate?a=${a}&b=${b}`)
    setResult(repsonse.data.result)
  }

  const handleReset = () => {
   setResult(null)
   setA(0)
   setB(0)
  }

  return (
  <div className="flex flex-col items-center mt-32">
    <h1 className="text-6xl mb-10">Moleculer</h1>
    
    <form onSubmit={(e) => e.preventDefault()}>
    <input type="number"
    value={a}
    onChange={(e) => setA(+(e.target.value))}
    className="border-2 border-black mr-2 text-center"
    />
    
    <input type="number"
    value={b}
    onChange={(e) => setB(+(e.target.value))}
    className="border-2 border-black text-center"
    />
  <button onClick={handleCalculate} className="block m-auto mt-4 border-2 border-black p-1 rounded-xl">Calculate</button>
  <button onClick={handleReset} className="block m-auto mt-4 border-2 border-black p-1 rounded-xl">Reset</button>
     <h2 className="text-center mt-6">Result: {result}</h2>
    </form>
  </div>

  );
}
