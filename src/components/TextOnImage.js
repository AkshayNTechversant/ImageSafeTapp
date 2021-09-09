import React, { Component, useContext, useRef } from "react";
import { Dimensions, View, Image, ImageBackground, Button, Share } from "react-native";
import { DragTextEditor } from 'react-native-drag-text-editor';
import { ImageContext } from '../context/ImageProcessing/ImageContext';
import ViewShot from "@wanmi/react-native-view-shot";
import { useState } from "react";
const WINDOW = Dimensions.get('window');

const TextOnImage = (url) => {
   
    const { image, updateImage } = useContext(ImageContext);
    const [viewUpdate,setViewUpdate] = useState(true);
    const viewShotRef = useRef();

    const captureViewShot = async () => {
        const ImageUrl = await viewShotRef.current.capture();
        // Share.share({ title: "Image", url: ImageUrl });
        updateImage(ImageUrl);
    };
    return (
        <View style={{
            height: "85%",
            width: "100%"
        }}>
            <ViewShot ref={viewShotRef} style={{ flex: 1 }} options={{ format: 'jpg', quality: 1.0, result: 'data-uri' }}>
                <ImageBackground
                    source={{ uri:image }}
                    style={{ width: "100%", height: "95%" }}/>
                <DragTextEditor
                    minWidth={100}
                    minHeight={100}
                    w={200}
                    h={200}
                    x={WINDOW.width / 4}
                    y={WINDOW.height / 3}
                    FontColor={"red"}
                    LineHeight={30}
                    TextAlign={"left"}
                    text="Text"
                    LetterSpacing={1.5}
                    FontSize={25}
                    isDraggable={true}
                    isResizable={true}
                    TopRightAction={() => console.log("-Top Right Pressed")}
                    centerPress={() => console.log("-Center Pressed")}
                    onTextChanged={(text) => console.log("Text contents =", text)}
                    onDragStart={() => console.log("-Drag Started")}
                    onDragEnd={() => console.log("- Drag ended")}
                    onDrag={() => console.log("- Dragging...")}
                    onResizeStart={() => console.log("- Resize Started")}
                    onResize={() => console.log("- Resizing...")}
                    onResizeEnd={() => console.log("- Resize Ended")}
                />
                <Button
                    title="Save Changes"
                    onPress={() => captureViewShot()} />
            </ViewShot>

        </View>
    )
}


export default TextOnImage;

