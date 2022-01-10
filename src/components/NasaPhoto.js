import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

const apiKey = process.env.REACT_APP_NASA_KEY;


function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);


    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);

            const data = await res.json();

            setPhotoData(data);
            console.log(data);
        }
    },[]);

    if(!photoData) return <div />;


    return (
        <>
         <NavBar />
        <div className="nasa-data">
            { (photoData.media_type === 'video') ? 
            <iframe
            title="space-video" 
            src={photoData.url} 
            frameborder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo" 
            /> : (
            <img src={photoData.url}
            alt={photoData.title}
            />

            )
            }
         <div className="nasa-data-desc">
            <h1 className="nasa-data-title">{photoData.title}</h1>
            <p>{photoData.date}</p>
            <p>{photoData.explanation}</p>
            <h4 className="App-video">Media Type Today: {photoData.media_type}</h4>
         </div>
        </div>
        </>
    )
}

export default NasaPhoto
