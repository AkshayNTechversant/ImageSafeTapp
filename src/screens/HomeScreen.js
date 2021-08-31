import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Dimensions, PermissionsAndroid, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';
import { ImageContext } from '../context/ImageProcessing/ImageContext';


const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {

  const { image ,updateImage } = useContext(ImageContext);
  console.log("ImageContext",image)
  
  const openCamera = () => {
    navigation.navigate('Workspace');
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      includeBase64: true
    }).then(image => {
      const imagePath = image.data;
      const source = "data:image/png;base64," + imagePath;
      updateImage(source);
      gotoPreview();
    });
  };

  const gotoPreview = () => {
    navigation.navigate('Preview');
  }

  return (
    <View style={styles.mainContainer}>
      <CustomButton
        title="Open Camera"
        onPress={() => openCamera()} />
      <CustomButton
        title="Open Gallery"
        onPress={() => openGallery()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff'
  }
});

export default HomeScreen;