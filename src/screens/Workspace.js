import React, { useEffect, useState , useContext} from 'react';
import { StyleSheet, View, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import PhotoManipulator from 'react-native-photo-manipulator';
import { ImageContext } from '../context/ImageProcessing/ImageContext';

const WorkSpace = ({ onPress }) => {
  const { image, updateImage } = useContext(ImageContext);

  const imageManipulate = () => {
    const texts = [
      { position: { x: 80, y: 10 }, text: "ALTITUDE", textSize: 10, color: "#ffff" },
      { position: { x: 80, y: 180 }, text: "677m", textSize: 10, color: "#ffff" },
      { position: { x: 190, y: 170 }, text: "-5386422 °N", textSize: 10, color: "#ffff" },
      { position: { x: 190, y: 180 }, text: "-1133196 °W", textSize: 10, color: "#ffff" }
    ];
    const cropRegion = { x: 5, y: 30, height: 400, width: 250 };
    const targetSize = { size: 200, width: 150 };

    // PhotoManipulator.crop(image, cropRegion, targetSize).then(path => {
    //   updateImage(path)
    // });

    PhotoManipulator.printText(image, texts).then(path => {
      console.log(`Result image path: ${path}`);
     updateImage(path)
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri:image }}
        style={{ width: "100%", height: '80%' }} />
      <Button
        title="Press"
        onPress={() => imageManipulate()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: "80%",
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10
  },
  textStyle: {
    color: "#fff",
    fontWeight: 'bold'
  }
});

export default WorkSpace;