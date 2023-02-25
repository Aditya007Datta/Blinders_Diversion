'use client'
import { useState, useEffect } from "react";

const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const unsubscribe = db.collection('images').onSnapshot((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setImages(data);
        });
        return unsubscribe;
    }, []);


    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
                <img key={image.id} src={image.url} alt={image.title} />
            ))}
        </div>
    );
};
