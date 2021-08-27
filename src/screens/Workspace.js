import React, {useState, useRef} from 'react';
import {Button, StatusBar, StyleSheet, View, Image} from 'react-native';
import {CropView} from 'react-native-image-crop-tools';
import ImagePicker from 'react-native-image-crop-picker';

const WorkSpace =() => {
  const [uri, setUri] = useState();
  const [url, setUrl] = useState();
  const cropViewRef = useRef();
  const saveImage = (url) =>{
    setUrl(url);
    console.log(url)
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Button
          title={'Pick Image'}
          onPress={() => {
            ImagePicker.openPicker({
                width: 300,
                height: 400,
              }).then(image => {
                console.log(image);
                setUri(image.sourceURL);
              });
          }}
        />
        {uri !== undefined && <CropView
          sourceUrl={uri}
          style={styles.cropView}
          ref={cropViewRef}
          onImageCrop={(res) => console.log(res.path)}
          keepAspectRatio
          aspectRatio={{width: 16, height: 9}}
        />}
        <Button
          title={'Get Cropped View'}
          onPress={() => {
            cropViewRef.current.rotateImage(true);
          }}
        />
        <Image
        source={{uri:url}}
        style={{
            height:100,
            width:100
        }}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cropView: {
    flex: 1,
    backgroundColor: 'red'
  },
});

export default WorkSpace;