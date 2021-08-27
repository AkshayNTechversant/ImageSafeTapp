
import React from 'react';
import { View , Image, StyleSheet } from 'react-native';

const CompleteImage = ({route}) => {
   
    return(
        <View style={styles.mainContainer}>
            <Image
            source={{uri:'https://atlas-network.com/wp-content/uploads/2019/03/Big-Data-blog1-16.9-1.jpg'}}
            style={styles.imageStyle}/>

        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        width:"100%",
        height:"80%"
    }
});

export default CompleteImage;