import React, {useState, useRef} from 'react';
import {Button, StatusBar, StyleSheet, View, Image} from 'react-native';
import {CropView} from 'react-native-image-crop-tools';

const RotateImage = ({ url, onPress }) => {
    const cropViewRef = useRef();
    return(
        <View style={{flex:1}}>
            <CropView
          sourceUrl={url}
          style={styles.cropView}
          ref={cropViewRef}
          onImageCrop={(res) => console.warn(res)}
          keepAspectRatio
          aspectRatio={{width: 16, height: 10}}
        />
        <Button
          title={'Press here to rotate'}
          onPress={() => {
            cropViewRef.current.rotateImage(false);
          }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    cropView:{
        height:"80%",
        width:"100%",
        backgroundColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:10
    },
    textStyle:{
        color:"#fff",
        fontWeight:'bold'
    }
});

export default RotateImage;