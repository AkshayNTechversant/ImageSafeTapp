import React from 'react';
import { View , StyleSheet} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import CustomButton from './CustomButton';

const Camera = ({navigation}) => {

    const [ { cameraRef } , { takePicture } ] = useCamera(null);

    const handleCapture = async() => {
        try{
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalDirectoryPath + '/testImage.jpeg';
            navigation.navigate('Preview',{ImageUrl:filePath})
            RNFS.moveFile(filePath , newFilePath )
            .then(()=>{
                console.log("Image Moved",filePath,"--to--",newFilePath);
                
            })
            .catch(error =>
                {
                    console.log(error);
                }
                )
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <View style={styles.mainContainer}>
            <RNCamera
            ref={cameraRef}
            type={RNCamera.Constants.Type.back}
            style={styles.preview} >
                <CustomButton
                title = "Capture"
                onPress={()=>handleCapture()}/>               
                </RNCamera>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'green'
    },
    preview:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end'
    }
});

export default Camera;