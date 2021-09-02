import React, { useState , useContext} from 'react';
import { StyleSheet, View, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import { ImageContext } from '../context/ImageProcessing/ImageContext';

const { width, height } = Dimensions.get('window');

const ImageCanvas = ({ }) => {
   
    const { image, updateImage , undo } = useContext(ImageContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.colorPelletRed}
            onPress={()=>undo()}></TouchableOpacity>
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