import React, { useState, useRef } from 'react';
import { Button, StatusBar, StyleSheet, View, Image } from 'react-native';
import { CropView } from 'react-native-image-crop-tools';

const WorkSpace = ({ onPress }) => {
  const cropViewRef = useRef();
  const [url, setUrl] = useState('https://atlas-network.com/wp-content/uploads/2019/03/Big-Data-blog1-16.9-1.jpg');

  return (
    <View style={styles.container}>
      {url !== undefined ? <CropView
        sourceUrl={url}
        style={styles.cropView}
        ref={cropViewRef}
        onImageCrop={(res) => console.log(res)}
      /> :
        null
      }
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cropView: {
    flex: 1,
    backgroundColor: 'red'
  },
  textStyle: {
    color: "#fff",
    fontWeight: 'bold'
  }
});

export default WorkSpace;