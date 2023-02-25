'use client'
import { useState } from "react";
import axios from "axios";

export default function TextComponent() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('')
    const [error, setError] = useState(null);
    const [model, setModel] = useState('gpt2-medium')

    const generateText = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                `https://api-inference.huggingface.co/models/${model}`,
                {
                    headers: { Authorization: "Bearer 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" },
                    method: "POST",
                    inputs: prompt,
                },
                { responseType: "text" }
            );
            setResult(response.data);
        }
        catch (err) {
            console.log(err);
            setError(true)
        }
        finally {
            setLoading(false)
        }
    }

    console.log(prompt)
    console.log(model)
    console.log(result)

    return (
        <div className="flex flex-col justify-center items-center">
            <input
                className="border-2 text-background border-black rounded-md p-2"
                onChange={(e) => setPrompt(e.target.value)}
                type="text"
                placeholder="Enter a prompt"
            />
            <button
                onClick={generateText}
                className="bg-[#2fd12f] text-white rounded-md p-3"
            >
                Next
            </button>
            {loading && <p>Loading...</p>}

            {!loading && console.log(result)}
        </div>
    );
}