import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, PermissionsAndroid, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';


const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {

  const [imageUrl, setImageUrl] = useState(null);
  const [base64Array, setBase64Array] = useState('');

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
      setImageUrl(source);
      console.log(imageUrl);      
    });
  };

  const gotoPreview =() =>{
    navigation.navigate('Preview',{imageData:imageUrl})
  }

  return (
    <View style={styles.mainContainer}>
      <CustomButton
        title="Open Camera"
        onPress={() => openCamera()} />
      <CustomButton
        title="Open Gallery"
        onPress={() => openGallery()} />
        <CustomButton
        title="Edit Image"
        onPress={() => gotoPreview()} />
      <Image
        style={{ height:200, width:300,borderRadius:10 }}
        source={{uri:imageUrl}} />
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