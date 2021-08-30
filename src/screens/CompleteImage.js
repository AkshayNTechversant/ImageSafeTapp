
import React, { useEffect } from 'react';
import { View , Image, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';

const CompleteImage = ({route}) => {
   const {ImageUrl} = route.params;
   
   const [image,setImage] = useState(null)
   useEffect(()=>{
    setImage(ImageUrl);
    console.log("Complete Image",image);
   },[image]);
   
    return(
        <View style={styles.mainContainer}>
            <Image
            source={{uri:image}}
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