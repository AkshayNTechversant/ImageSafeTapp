import React,{useState} from 'react';
import { StyleSheet, View, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import PhotoManipulator from 'react-native-photo-manipulator';

const { width, height } = Dimensions.get('window');

const ImageCanvas = ({ }) => {
    const [imageUrl, setImageUrl] = useState('');
    const image = "https://unsplash.com/photos/qw6qQQyYQpo/download?force=true";
    const texts = [
        { position: { x: 50, y: 30 }, text: "Text 1", textSize: 30, color: "#000000" },
        { position: { x: 50, y: 30 }, text: "Text 1", textSize: 30, color: "#FFFFFF", thickness: 3 }
    ];
    
    // PhotoManipulator.printText(image, texts).then(path => {
    //     console.log(`Result image path1: ${path}`);
    //     setImageUrl(path)
    // });
    return (
        <View style={styles.container}>
            {/* <Image
            style={{height:100,width:100}}
            source={require(image)}/> */}
            <TouchableOpacity style={styles.colorPelletRed}></TouchableOpacity>
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
        width: width,
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