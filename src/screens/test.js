import React, { useRef, useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Button, PermissionsAndroid } from 'react-native';
import SignatureScreen from "react-native-signature-canvas";
import DrawIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import PhotoManipulator from 'react-native-photo-manipulator';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImageCanvas from './ImageCanvas';

const { width, height } = Dimensions.get('window');


const PreviewScreen = ({ onOK, route }) => {

  const [imageUrl, setImageUrl] = useState('');
  const [base64Array, setBase64Array] = useState('');

  const openCamera = async () => {
    const options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo'
      },
      includeBase64: true,
      saveToPhotos: true
    };


    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "App Camera Permission",
        message: "App needs access to your camera ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Camera permission given");
    } else {
      console.log("Camera permission denied");
    };


    launchCamera(options, response => {
      setBase64Array(response.assets);
      base64Array.map((data) => {
        const ImageUri = data.uri;
        console.log("Image Url : ", ImageUri);
        const source = { uri: 'data:image/jpeg;base64,' + ImageUri }
        setImageUrl(ImageUri);
      });

      if (response.didCancel) {
        console.log("User cancel Image Picker");
      }
    });
  };


  const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo'
      },
      includeBase64: true
    };
    launchImageLibrary(options, response => {
      setBase64Array(response.assets);
      base64Array.map((data) => {
        const ImageUri = data.base64;
        console.log("Image Url : ", ImageUri);
        const source = { uri: 'data:image/jpeg;base64,' + ImageUri }
        setImageUrl(source);
      });
      if (response.didCancel) {
        console.log("user cancel Image Picker");
      }
    });
  };
  // useEffect(() => {
  //   const { ImageUri } = route.params;
  //   console.log("Image", ImageUri);
  //   setImageUri(ImageUri);
  // }, [])
  const imgWidth = width;
  const imgHeight = "80%";

  const ref = useRef();
  const handleSignature = signature => {
    console.log(signature);
    onOK(signature);
  };

  const handleClear = () => {
    ref.current.clearSignature();
  }

  const handleConfirm = () => {
    console.log("end");
    ref.current.readSignature();
  }

  const style = `.m-signature-pad {box-shadow: none; border: none; } 
              .m-signature-pad--body {border: none;}
              .m-signature-pad--footer {display: none; margin: 0px;}
              body,html {
              width: ${imgWidth}px; height: ${imgHeight}px;}`;

  return (
    <View style={styles.mainContainer}>
      <View style={{ width: imgWidth, height: imgHeight }}>
        <SignatureScreen
          ref={ref}
          overlaySrc={`${imageUrl}`}
          overlayWidth={imgWidth}
          overlayHeight={imgHeight}
          webStyle={style}
          onOK={handleSignature}
        />
      </View>
      <View style={styles.row}>
        <Button
          title="Clear"
          onPress={handleClear}
        />
        <Button
          title="Confirm"
          onPress={handleConfirm}
        />
      </View>
      <View style={styles.colorSelectContainer}>
        <ImageCanvas />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControls}>
          <TouchableOpacity>
            <DrawIcon name="draw" size={30} color="#ffff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="text" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openCamera()}>
            <Icon name="ios-location" size={30} color="#32a852" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openGallery()}>
            <Icon name="calendar" size={30} color="#5de1f0" />
          </TouchableOpacity>
          <TouchableOpacity>
            <DrawIcon name="undo" size={30} color="#f0df5d" />
          </TouchableOpacity>
          <TouchableOpacity>
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
    alignItems: 'center'
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