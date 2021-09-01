import React, { useRef, useState, useEffect,useContext } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Button, PermissionsAndroid, Alert } from 'react-native';
import SignatureScreen from "react-native-signature-canvas";
import { ImageContext } from '../context/ImageProcessing/ImageContext';
const { width, height } = Dimensions.get('window');

const DrawCanvas = ({ url, onPress, parentImage, undo }) => {
    const imgWidth = width;
    const imgHeight = height / 1.39;
    const ref = useRef();
    const [signature, setSign] = useState(null);

    const { image, updateImage } = useContext(ImageContext);
    

    const handleSignature = (signature) => {
        console.log(signature);
        updateImage(signature);
    };

    const handleClear = () => {
        ref.current.clearSignature();
    }

    const handleConfirm = () => {
        console.log("end");
        ref.current.readSignature();
    }

    const saveAllChanges = () => {
        const newValue = signature;
        setSaveAll(newValue);
        parentImage(newValue);
    };
    const undoImage = () => {
        const value = "null";
        setSign(value);
        undo(value);
        ;
    }

    const style = `.m-signature-pad {box-shadow: none; border: none; } 
              .m-signature-pad--body {border: none;}
              .m-signature-pad--footer {display: none; margin: 0px;}
              body,html {
              width: ${imgWidth}px; height: ${imgHeight}px;}`;
    return (
        <View style={styles.mainContainer}>
           
                <View style={styles.mainContainer}>
                    <View style={{ width: imgWidth, height: imgHeight }}>
                        <SignatureScreen
                            ref={ref}
                            dataURL={image}
                            overlayWidth={imgWidth}
                            overlayHeight={imgHeight}
                            webStyle={style}
                            onOK={handleSignature}
                        />
                    </View>
                    <View style={styles.row}>
                        <Button
                            title="Clear"
                            onPress={handleClear}
                        />
                        <Button
                            title="Confirm"
                            onPress={handleConfirm}
                        />
                    </View>
                </View>
            

        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    row: {
        flexDirection: "row",
        justifyContent: 'center',
        width: width,
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DrawCanvas;