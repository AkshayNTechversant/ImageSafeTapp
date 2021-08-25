import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import PhotoManipulator from 'react-native-photo-manipulator';

const { width, height } = Dimensions.get('window');

const ImageCanvas = ({ }) => {
    const initialState = {
        state: "data:image/jpeg;base64,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"
    }
    const [imageUrl, setImageUrl] = useState(initialState.state);

    const imageManipulate = () => {
        const texts = [
            { position: { x: 10, y: 170 }, text: "ALTITUDE", textSize: 10, color: "#ffff" },
            { position: { x: 20, y: 180 }, text: "677m", textSize: 10, color: "#ffff" },
            { position: { x: 190, y: 170 }, text: "-5386422 °N", textSize: 10, color: "#ffff" },
            { position: { x: 190, y: 180 }, text: "-1133196 °W", textSize: 10, color: "#ffff" }
        ];

        PhotoManipulator.printText(imageUrl, texts).then(path => {
            console.log(`Result image path1: ${path}`);
            setImageUrl(path)
        });
    }
    return (       
            <View style={styles.container}>
                <TouchableOpacity style={styles.colorPelletRed} onPress={() => imageManipulate()}></TouchableOpacity>
                <TouchableOpacity style={styles.colorPelletYellow}></TouchableOpacity>
                <TouchableOpacity style={styles.colorPelletGreen}></TouchableOpacity>
                <TouchableOpacity style={styles.colorPelletBlue}></TouchableOpacity>
                <TouchableOpacity style={styles.colorPelletWhite}></TouchableOpacity>
                <TouchableOpacity style={styles.colorPelletBlack}></TouchableOpacity>
            </View>
    );
}

export default ImageCanvas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: "92%",
        padding: 10,
        flexDirection: "row"
    },
    colorPelletRed: {
        width: "10%",
        height: 30,
        backgroundColor: 'red'
    },
    colorPelletYellow: {
        width: "10%",
        height: 30,
        backgroundColor: '#f2fa1b'
    },
    colorPelletGreen: {
        width: "10%",
        height: 30,
        backgroundColor: '#48f52a'
    },
    colorPelletBlue: {
        width: "10%",
        height: 30,
        backgroundColor: '#45c4ff'
    },
    colorPelletWhite: {
        width: "10%",
        height: 30,
        backgroundColor: '#ffff'
    },
    colorPelletBlack: {
        width: "10%",
        height: 30,
        backgroundColor: '#000000'
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    }
});