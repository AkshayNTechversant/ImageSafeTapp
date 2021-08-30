import React, { Component } from "react";
import { Dimensions, View, Image, ImageBackground } from "react-native";
import { DragTextEditor } from 'react-native-drag-text-editor';
const WINDOW = Dimensions.get('window');

const TextOnImage = (url) => {

    return (
        <View style={{
            height: "85%",
            width: "100%"
        }}>
            <Image
                source={{ uri: "file:///Users/akshayn/Library/Developer/CoreSimulator/Devices/01E44A09-EFB2-4BE3-951B-F9240046508D/data/Containers/Data/Application/D291455A-91EF-42C1-A637-6C23644AB562/Library/Caches/C55A79C3-C8E9-497E-BDEC-619975B8A896.jpg" }}
                style={{ width: "100%", height: "95%" }} />
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

        </View>
    )
}


export default TextOnImage;

