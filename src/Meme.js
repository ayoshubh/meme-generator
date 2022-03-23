import React, { useState } from "react";
import MemeData from "./MemeData";

const Meme = () => {
    
    const [memeImage, setMemeImage] = useState("")
    function memeImg(){
        const memeArr= MemeData.data.memes
        // console.log(memeArr)
        const randomNo = Math.floor(Math.random() * memeArr.length)
        setMemeImage(memeArr[randomNo].url)
        
        
    }
  return (
    <>
    <main>
        <div className="form">
            <input type="text" className="form-input" placeholder="Top text"/>
            <input type="text" className="form-input" placeholder="Bottom text"/>
            <button className="memeButton" onClick={memeImg}>Get a new meme image</button>
            <img src={memeImage} alt="meme"/>
        </div>
    </main>
    </>
  )
}

export default Meme