import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import PhotoManipulator from 'react-native-photo-manipulator';

const WorkSpace = ({ onPress }) => {
  const [imageUrl, setImageUrl] = useState("file:///Users/akshayn/Library/Developer/CoreSimulator/Devices/01E44A09-EFB2-4BE3-951B-F9240046508D/data/Containers/Data/Application/D291455A-91EF-42C1-A637-6C23644AB562/Library/Caches/2759CD1B-648F-41BC-AA41-1B17DD67C041.jpg");

  const imageManipulate = () => {
    const texts = [
      { position: { x: 80, y: 10 }, text: "ALTITUDE", textSize: 10, color: "#ffff" },
      { position: { x: 80, y: 180 }, text: "677m", textSize: 10, color: "#ffff" },
      { position: { x: 190, y: 170 }, text: "-5386422 °N", textSize: 10, color: "#ffff" },
      { position: { x: 190, y: 180 }, text: "-1133196 °W", textSize: 10, color: "#ffff" }
    ];
    const cropRegion = { x: 5, y: 30, height: 400, width: 250 };
    const targetSize = { size: 200, width: 150 };

    PhotoManipulator.crop(imageUrl, cropRegion, targetSize).then(path => {
      console.log(`Result image path crop: ${path}`);
    });

    // PhotoManipulator.printText(imageUrl, texts).then(path => {
    //   console.log(`Result image path: ${path}`);
    //   setImageUrl(path);
    // });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: "file:///Users/akshayn/Library/Developer/CoreSimulator/Devices/01E44A09-EFB2-4BE3-951B-F9240046508D/data/Containers/Data/Application/D291455A-91EF-42C1-A637-6C23644AB562/Library/Caches/A55D2D60-670D-4C11-A810-0EDDA9F00AB1.jpg" }}
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

export default WorkSpace;