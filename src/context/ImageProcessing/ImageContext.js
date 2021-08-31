import React,{ useState } from "react";
import { createContext } from "react";


export const ImageContext = createContext();

const ImageProcessing = ({children}) => {
    const [image,setImage] = useState(null);

    const updateImage = (source) => {
        setImage(source);
    }

    return(
        <ImageContext.Provider value={{ image , updateImage }}>
            {children}
        </ImageContext.Provider>
    );
};

export default ImageProcessing; 