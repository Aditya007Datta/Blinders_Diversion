'use client'
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { saveAs } from 'file-saver';
// import DownloadButton from "./download";
function ImagePost() {
    const [prompt, setPrompt] = useState("");
    const [imageBlob, setImageBlob] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    console.log(prompt);
    const generateArt = async () => {
        setLoading(true)
        try {
            const response = await axios.post(
                `https://empty-numbers-pump-34-124-193-7.loca.lt/text2img`,
                {

                    "prompt": prompt,
                    "negative_prompt": "string",
                    "scheduler": "EulerAncestralDiscreteScheduler",
                    "image_height": 512,
                    "image_width": 512,
                    "num_images": 1,
                    "guidance_scale": 7,
                    "steps": 50,
                    "seed": 42,


                }
            );
            // const url = URL.createObjectURL(response.data.images);
            // setImageUrl(url)
            //     (JSON.stringify(response.data.images))
            // const url = URL.createObjectURL(response.data.images);
            // setImageUrl(url)
            setImageBlob(response.data.images);

        } catch (err) {
            console.log(err);
            setError(true)
        } finally {
            setLoading(false)
        }
    };




    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-4xl font-extrabold">AI Image Generator</h1>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-4">
                    <input
                        className="border-2 border-black rounded-md p-2 text-background"
                        onChange={(e) => setPrompt(e.target.value)}
                        type="text"
                        placeholder="Enter a prompt"
                    />
                    <button
                        onClick={generateArt}
                        className="bg-black text-white rounded-md p-2"
                    >
                        Next
                    </button>
                    {loading && <p>Loading...</p>}
                </div>
                {imageBlob && (
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Image src={`data:image/png;base64,${imageBlob}`} alt="AI generated image" height={500} width={500} />

                    </div>
                )}


            </div>
        </div>
    );
}

export default ImagePost;