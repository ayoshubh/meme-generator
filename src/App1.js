import { useEffect, useState } from "react";
import "./App.css";

function App1(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [name, setName] = useState("");

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    
    // On every render
    useEffect(() =>{
        console.log("I Re-rendered");
        // window.addEventListener("resize", updateWindowWidth);
    });
    
    // On first render/mount only! - componentDidMount Alternative
    useEffect(()=>{
    
    }, []);
}
  













