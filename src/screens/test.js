import React, {useState, useRef} from 'react';
import {Button, StatusBar, StyleSheet, View, Image , Dimensions} from 'react-native';
import {CropView} from 'react-native-image-crop-tools';
import ImagePicker from 'react-native-image-crop-picker';
import {DragTextEditor} from 'react-native-drag-text-editor';
const WINDOW = Dimensions.get('window');

const test =() => {
  const [uri, setUri] = useState();
  const [url, setUrl] = useState();
  const cropViewRef = useRef();
  const saveImage = (url) =>{
    setUrl(url);
    console.log(url)
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
      <DragTextEditor
          minWidth={100}
          minHeight={100}
          w={200}
          h={200}
          x={WINDOW.width/4}
          y={WINDOW.height/3}
          FontColor={"#000000"}
          LineHeight={15}
          TextAlign={"left"}
          LetterSpacing={0}
          FontSize={15}
          BackgroundColor={'red'}
          isDraggable={true}
          isResizable={true}
          TopRightAction={()=>console.log("-Top Right Pressed")}
          centerPress={()=>console.log("-Center Pressed")} 
          onTextChanged={(text)=>console.log("Text contents =", text)}
          onDragStart={()=>console.log("-Drag Started")}
          onDragEnd={()=>console.log("- Drag ended")}
          onDrag={()=>console.log("- Dragging...")}
          onResizeStart={()=>console.log("- Resize Started")}
          onResize={()=>console.log("- Resizing...")}
          onResizeEnd={()=>console.log("- Resize Ended")}
        /> 
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cropView: {
    flex: 1,
    backgroundColor: 'red'
  },
});

export default test;