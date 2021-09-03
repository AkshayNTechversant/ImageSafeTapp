import React, { useState } from "react";
import { createContext } from "react";


export const ImageContext = createContext();

const useHistory = (initialState) => {
    const [index, setIndex] = useState(0)
    const [history, setHistory] = useState([initialState]);

    const setState = (action,overWrite=false) => {
        const newState = typeof action === "function" ? action(history[index]) : action;

        if(overWrite){
            const historyCopy = [...history];
            historyCopy[index] = newState;
            setHistory(historyCopy);
        }
        else{
            setHistory(prevState => [...prevState, newState]);
            setIndex(prevState => prevState + 1);
        }      
    };

    const undo = () => index > 0 && setIndex(prevState => prevState - 1);
    const redo = () => index < history.length - 1 && setIndex(prevState => prevState + 1);
    return [ history[index], setState, undo , redo ];
};

const ImageProcessing = ({ children }) => {

    const [image, setImage] = useState(null);
    // const [elements, setElements ,undo , redo ] = useHistory([]);
    const createElement = (id,value) => {
        return{id,value}
    }
    const pushElements = (id,value) => {
       const updateElement = createElement(id,value);
       const elementCopy = [...elements];
        elementCopy[id] = updateElement;
        setElements(elementCopy);
    };
    

    const updateImage = (source) => {
        setImage(source);
    };

    return (
        <ImageContext.Provider value={{ image, updateImage }}>
            {children}
        </ImageContext.Provider>
    );
};

export default ImageProcessing;