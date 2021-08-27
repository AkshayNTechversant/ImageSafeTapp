import React, { useRef, useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Button, PermissionsAndroid, Alert } from 'react-native';
import DrawIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import PhotoManipulator from 'react-native-photo-manipulator';
import ImageCanvas from './ImageCanvas';
import ImagePicker from 'react-native-image-crop-picker';
import DrawCanvas from '../components/DrawCanvas';
import RotateImage from '../components/RotateImage';
import LocationOnImage from '../components/LocationOnImage';
import DateOnImage from '../components/DateOnImage';
import TextOnImage from '../components/TextOnImage';


const { width, height } = Dimensions.get('window');


const PreviewScreen = ({ onOK, route }) => {

  const [showDraw, setShowDraw] = useState(false);
  const [showRotate, setShowRotate] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showDate, setShowdate] = useState(false);
  const [showText, setShowText] = useState(false);

  const { imageData } = route.params;


  const imageManipulate = () => {
    const texts = [
      { position: { x: 10, y: 100 }, text: "ALTITUDE", textSize: 10, color: "#ffff" },
      { position: { x: 20, y: 180 }, text: "677m", textSize: 10, color: "#ffff" },
      { position: { x: 190, y: 170 }, text: "-5386422 °N", textSize: 10, color: "#ffff" },
      { position: { x: 190, y: 180 }, text: "-1133196 °W", textSize: 10, color: "#ffff" }
    ];

    PhotoManipulator.printText(imageData, texts).then(path => {
      console.log(`Result image path: ${path}`);
      setImageUrl(path);
    });
  };

  const openDraw = () => {
    setShowLocation(false);
    setShowRotate(false);
    setShowDraw(true);
    setShowdate(false);
    setShowText(false);
  };

  const openRotate = () => {
    setShowLocation(false);
    setShowRotate(true);
    setShowDraw(false);
    setShowdate(false);
    setShowText(false);
  };

  const openLocation = () => {
    setShowLocation(true);
    setShowRotate(false);
    setShowDraw(false);
    setShowdate(false);
    setShowText(false);
  };

  const openDate = () => {
    setShowLocation(false);
    setShowRotate(false);
    setShowDraw(false);
    setShowdate(true);
    setShowText(false);
  };

  const openTextImage = () => {
    setShowLocation(false);
    setShowRotate(false);
    setShowDraw(false);
    setShowdate(false);
    setShowText(true);
  }

  return (
    <View style={styles.mainContainer}>
      {
        showDraw ?
          <DrawCanvas
            url={imageData} />
          : <View style={styles.mainContainer}>
          </View>
      }
      {
        showRotate ?
          <RotateImage
            url={imageData} />
          :
          null
      }
      {
        showLocation ?
          <LocationOnImage
            url={imageData} />
          :
          null
      }
      {
        showDate ?
          <DateOnImage
            url={imageData} />
          :
          null
      }
      {
        showText ?
          <TextOnImage
            url={imageData} />
          :
          null
      }
      <View style={styles.colorSelectContainer}>
        <ImageCanvas />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControls}>
          <TouchableOpacity
            onPress={() => openDraw()}>
            <DrawIcon name="draw" size={30} color="#ffff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openTextImage()}>
            <Icon name="text" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLocation()}>
            <Icon name="ios-location" size={30} color="#32a852" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openDate()}>
            <Icon name="calendar" size={30} color="#5de1f0" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => createTwoButtonAlert()}>
            <DrawIcon name="undo" size={30} color="#f0df5d" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openRotate()}>
            <DrawIcon name="rotate-right" size={30} color="#f0df5d" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center'
  },
  imagePreview: {
    height: height - 120,
    width: width
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  colorSelectContainer: {
    width: width,
    height: 50,
    backgroundColor: '#383635',
  },
  bottomContainer: {
    borderTopColor: '#ffff',
    borderTopWidth: 1.5,
    width: width,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#99946b'
  },
  bottomControls: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-around',
  }
});

export default PreviewScreen;