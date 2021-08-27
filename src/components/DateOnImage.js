import React from 'react';
import { TouchableOpacity , StyleSheet, Text } from 'react-native';

const DateOnImage = ({ url, onPress }) => {
    return(
        <TouchableOpacity 
        onPress={onPress}
        style = {styles.button}>
            <Text style = {styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center'
      },
});

export default DateOnImage;