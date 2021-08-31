import React, {useState, useRef,useEffect,useContext} from 'react';
import {Button, StatusBar, StyleSheet, View, Image , Dimensions} from 'react-native';
import {CropView} from 'react-native-image-crop-tools';
import { ImageContext } from '../context/ImageProcessing/ImageContext';

const { width, height } = Dimensions.get('window');

const RotateImage = ({ url, onPress , parentImage}) => {
    
    const cropViewRef = useRef();
    const [saveAll, setSaveAll] = useState(null);
    const { image, updateImage } = useContext(ImageContext);

    return(
      <View style={styles.container}>
          <View style={styles.container}>
           <CropView
          sourceUrl={url}
          style={styles.cropView}
          ref={cropViewRef}
          onImageCrop={(res) =>updateImage(res.uri)}
          keepAspectRatio
        />    
        <View style={styles.buttonContainer}>
        <Button
           title={'Rotate Image'}
           onPress={() => {
             cropViewRef.current.rotateImage(true);
           }}
         />
         <Button
           title={'Save Changes'}
           onPress={() => {
             cropViewRef.current.saveImage(100);
           }}
         />
        </View>     
        </View>    
        </View>
    );
};

const styles = StyleSheet.create({
  container:{
   flex:5,
  },
  cropView: {
    flex:1,
    backgroundColor:'red'
  },
    textStyle:{
        color:"#fff",
        fontWeight:'bold'
    },
    buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    imageContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
});

export default RotateImage;