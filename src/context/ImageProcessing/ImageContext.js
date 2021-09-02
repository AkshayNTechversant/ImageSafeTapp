import React, { useState } from "react";
import { createContext } from "react";


export const ImageContext = createContext();

const ImageProcessing = ({ children }) => {

    const [image, setImage] = useState(null);
    const [present , setPresent ] = useState(null);
    const [past,setPast] = useState([]);
    const [future,setFuture] = useState([]);
    

    const updateState = (value) => {
        setPast(image);
        setPresent(value);
        console.log("Data",value);
    };

    const undo = () => {
        future.push(present);
        setPresent(past.pop());
        console.log("Data",present);
    };

   

    const updateImage = (source) => {
        setImage(source);
        setPresent(source);
    }

    return (
        <ImageContext.Provider value={{ image, updateImage ,updateState , undo }}>
            {children}
        </ImageContext.Provider>
    );
};

export default ImageProcessing;