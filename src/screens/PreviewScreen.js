import React, { useRef, useState, useEffect ,useContext} from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Button, PermissionsAndroid, Alert } from 'react-native';
import DrawIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import PhotoManipulator from 'react-native-photo-manipulator';
import ImageCanvas from './ImageCanvas';
import DrawCanvas from '../components/DrawCanvas';
import RotateImage from '../components/RotateImage';
import LocationOnImage from '../components/LocationOnImage';
import DateOnImage from '../components/DateOnImage';
import TextOnImage from '../components/TextOnImage';
import { ImageContext } from '../context/ImageProcessing/ImageContext';


const { width, height } = Dimensions.get('window');


const PreviewScreen = ({ onOK, route, navigation }) => {

  const [showDraw, setShowDraw] = useState(false);
  const [showRotate, setShowRotate] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showDate, setShowdate] = useState(false);
  const [showText, setShowText] = useState(false);

  const { image ,updateImage } = useContext(ImageContext);
  console.log("Image",image.id)
 
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
  };

  const showDrawImage = (saveAll) => {
    const data = saveAll;
  }

  const showRotateImage = (saveAll) => {
    console.log("RotateImage", saveAll);
    const data = saveAll;
  }

  return (
    <View style={styles.mainContainer}>
      {
        showDraw ?
          <DrawCanvas
            url={image.source}
            parentImage={showDrawImage} />
          : <View style={styles.mainContainer}>
          </View>
      }
      {
        showRotate ?
        <View style={styles.mainContainer1}>
          <RotateImage
            url={image} 
            parentImage={showRotateImage}/>
          </View>
          
          :
          null
      }
      {
        showLocation ?
          <LocationOnImage
            url={image} />
          :
          null
      }
      {
        showDate ?
          <DateOnImage
            url={image} />
          :
          null
      }
      {
        showText ?
          <TextOnImage
            url={image} />
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
          <TouchableOpacity onPress={() => undo()}>
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
  mainContainer1: {
    flex:11,
    
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