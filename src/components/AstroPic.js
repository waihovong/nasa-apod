import React, { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;

export default function Apod() {
    const [photoData, setPhotoData] = useState(null);
    useEffect(()=> {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);
    if(!photoData) return <div/>
    return (
        <div className="apod-container">
            <div className="nasa-photo nasa-item">
                <h1 className="title">Astronomy Picture of the Day</h1>
                <img
                    src={photoData.url}
                    alt={photoData.title}
                    className="photo"
                    />
            </div>
            <div className="nasa-data nasa-item">
                <h1 className="title">{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="author">{photoData.copyright}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
    );
}