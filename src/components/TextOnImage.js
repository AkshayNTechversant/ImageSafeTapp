import React, { Component } from "react";
import { Dimensions, View, Image, ImageBackground } from "react-native";
import { DragTextEditor } from 'react-native-drag-text-editor';
const WINDOW = Dimensions.get('window');

const TextOnImage = (url) => {

    return (
        <View>
            <ImageBackground
                source={{uri:url }}
                style={{ width: "100%", height: "80%" }} >
            <DragTextEditor
                minWidth={100}
                minHeight={100}
                w={200}
                h={200}
                x={WINDOW.width / 4}
                y={WINDOW.height / 3}
                FontColor={"#000000"}
                LineHeight={15}
                TextAlign={"left"}
                LetterSpacing={0}
                FontSize={15}
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
            </ImageBackground>
        </View>
    )
}


export default TextOnImage;

