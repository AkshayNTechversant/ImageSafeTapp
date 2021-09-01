import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import PhotoManipulator from 'react-native-photo-manipulator';
import { ImageContext } from '../context/ImageProcessing/ImageContext';

const LocationOnImage = ({ url, onPress }) => {
  const { image, updateImage } = useContext(ImageContext);

  useEffect(() => {
    
    
  }, []);

  const imageManipulate = () => {
    const texts = [
      { position: { x: 50, y: 1650 }, text: "ALTITUDE", textSize: 40, color: "white", thickness:8 },
      { position: { x: 90, y: 1700 }, text: "677m", textSize: 40, color: "white", thickness: 8 },
      { position: { x: 900, y: 1650 }, text: "-5386422 °N", textSize: 40, color: "white", thickness: 8 },
      { position: { x: 900, y: 1700 }, text: "-1133196 °W", textSize: 40, color: "white", thickness: 8 }
    ];

    PhotoManipulator.printText(image, texts).then(path => {
      console.log(`Result image path: ${path}`);
      updateImage(path)
    });
  };
  return (
    <View style={{ flex: 10, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: '90%' }} />
      <Button
        title="Add location"
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

export default LocationOnImage;