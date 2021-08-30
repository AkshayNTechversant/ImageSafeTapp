import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import PhotoManipulator from 'react-native-photo-manipulator';

const LocationOnImage = ({ url, onPress }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const imageManipulate = () => {
    const texts = [
      { position: { x: 80, y: 10 }, text: "ALTITUDE", textSize: 10, color: "#ffff" },
      { position: { x: 80, y: 180 }, text: "677m", textSize: 10, color: "#ffff" },
      { position: { x: 190, y: 170 }, text: "-5386422 °N", textSize: 10, color: "#ffff" },
      { position: { x: 190, y: 180 }, text: "-1133196 °W", textSize: 10, color: "#ffff" }
    ];

    PhotoManipulator.printText(url, texts).then(path => {
      console.log(`Result image path: ${path}`);
      setImageUrl(path);
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri:imageUrl}}
        style={{ width: "100%", height: '90%' }} />
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

export default LocationOnImage;