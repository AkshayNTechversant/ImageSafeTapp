import React, {useState, useRef} from 'react';
import {Button, StatusBar, StyleSheet, View, Image} from 'react-native';
import {CropView} from 'react-native-image-crop-tools';

const RotateImage = ({ url, onPress }) => {
    const cropViewRef = useRef();
    const [responseImage,setResponseImage] = useState(null);
    
    return(
      <View style={styles.container}>
            {url !== undefined ? <CropView
          sourceUrl={url}
          style={styles.cropView}
          ref={cropViewRef}
          onImageCrop={(res) => console.log(res)}
        />:
       null
       }
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
    );
};

const styles = StyleSheet.create({
  container:{
    flex:1
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
    }
});

export default RotateImage;