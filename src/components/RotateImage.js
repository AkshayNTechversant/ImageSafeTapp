import React, {useState, useRef,useEffect} from 'react';
import {Button, StatusBar, StyleSheet, View, Image , Dimensions} from 'react-native';
import {CropView} from 'react-native-image-crop-tools';

const { width, height } = Dimensions.get('window');

const RotateImage = ({ url, onPress , parentImage}) => {
    
    const cropViewRef = useRef();
    const [saveAll, setSaveAll] = useState(null);

    useEffect(() => {    
     
    },[saveAll]);
    
    
    const saveAllChanges = () => {
      const newValue = saveAll;
      setSaveAll(newValue);
      parentImage(newValue);
  };

    return(
      <View style={styles.container}>
        { saveAll !== null ?
          <View style={styles.imageContainer}>
          <Image
          source={{uri:saveAll}}
          style={{
            height:height-200,
            width:width
          }}/>
          </View>   
          : 
          <View style={styles.container}>
           <CropView
          sourceUrl={url}
          style={styles.cropView}
          ref={cropViewRef}
          onImageCrop={(res) =>{ setSaveAll(res.uri)}}
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
             saveAllChanges();
           }}
         />
        </View>     
        </View> 
       }    
        
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