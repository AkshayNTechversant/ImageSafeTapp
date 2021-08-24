import React, { useState } from 'react';
import {  View, StyleSheet, Dimensions, PermissionsAndroid, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {

  const [imageUrl, setImageUrl] = useState('');

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
      setImageUrl(response.assets);
     const ImageUri = imageUrl.map((data) => {
         data.uri;
      });
      console.log("Image Url : ",ImageUri);
      setImageUrl(ImageUri);

      if (response.didCancel) {
        console.log("User cancel Image Picker");
      }    
      else{
        navigation.navigate('Preview',{ImageUri:imageUrl});
      }
    });  
  }


  const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo'
      },
      includeBase64: true
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log("user cancel Image Picker");
      }
      else if (response.error) {
        console.log("Image error : ", response.error);
      }
      else {
        const source = { uri: 'data:image/jpeg;base64,' + response.base64 }
        console.log("Base64 : ", source);

      }
    });
  }
  return (
    <View style={styles.mainContainer}>
      <CustomButton
        title="Open Camera"
        onPress={() => openCamera()} />
      <CustomButton
        title="Open Gallery"
        onPress={() => navigation.navigate('ImageCanvas')} />
      <Icon name="repeat" size={30} color="#ffff" />
      <Image
        style={{ height: 100, width: 100 }}
        source={imageUrl} />
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