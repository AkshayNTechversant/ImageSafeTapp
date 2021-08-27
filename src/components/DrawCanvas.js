import React, { useRef, useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Button, PermissionsAndroid, Alert } from 'react-native';
import SignatureScreen from "react-native-signature-canvas";

const { width, height } = Dimensions.get('window');

const DrawCanvas = ({ url, onPress }) => {
    const imgWidth = width;
    const imgHeight = height / 1.38;
    const ref = useRef();
    const [signature, setSign] = useState(null);

    const handleSignature = (signature) => {
        console.log(signature);
        setSign(signature);
    };

    const handleClear = () => {
        ref.current.clearSignature();
    }

    const handleConfirm = () => {
        console.log("end");
        ref.current.readSignature();
    }

    const style = `.m-signature-pad {box-shadow: none; border: none; } 
              .m-signature-pad--body {border: none;}
              .m-signature-pad--footer {display: none; margin: 0px;}
              body,html {
              width: ${imgWidth}px; height: ${imgHeight}px;}`;
    return (
        <View>
            <View style={{ width: imgWidth, height: imgHeight }}>
                <SignatureScreen
                    ref={ref}
                    dataURL={url}
                    overlayWidth={imgWidth}
                    overlayHeight={imgHeight}
                    webStyle={style}
                    onOK={handleSignature}
                />
            </View>
            <View style={styles.row}>
                <Button
                    title="Confirm"
                    onPress={handleConfirm}
                />
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
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
});

export default DrawCanvas;