import React from 'react';
import { TouchableOpacity , StyleSheet, Text } from 'react-native';

const CustomButton = ({ title, onPress }) => {
    return(
        <TouchableOpacity 
        onPress={onPress}
        style = {styles.button}>
            <Text style = {styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        height:60,
        width:"80%",
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

export default CustomButton;