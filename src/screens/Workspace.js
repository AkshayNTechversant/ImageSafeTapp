import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Button, Share } from 'react-native';
import ViewShot from "@wanmi/react-native-view-shot";
import { useRef } from 'react';


const WorkSpace = () => {
    const viewShotRef = useRef();
    const captureViewShot = async () => {
        const ImageUrl = await viewShotRef.current.capture();
        Share.share({title:"Image",url:ImageUrl});
    }
    const captureScreenShot = () => {
        captureRef(viewShotRef, {
            format: "jpg",
            quality: 1.0
          })
          .then(
            uri => console.log("Image saved to", uri),
            error => console.error("Oops, snapshot failed", error)
          );
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ViewShot ref={viewShotRef} style={{flex:1}} options={{format:'jpg',quality:1.0,result:'data-uri'}}>
                <ImageBackground
                    source={{ uri: "https://i.pinimg.com/736x/7e/1c/0b/7e1c0b3223789770299bc3b66b2fc2a0.jpg" }}
                    style={{ height: "100%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text style={styles.textStyle}>Take ScreenShot</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </ViewShot>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: "row"
            }}>
                <Button
                    title="View Shot"
                    onPress={() => captureViewShot()} />
                <Button
                    title="Screen Shot"
                    onPress={() => captureScreenShot()} />
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',     
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default WorkSpace;