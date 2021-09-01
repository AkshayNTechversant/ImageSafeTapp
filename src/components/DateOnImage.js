import React,{useEffect, useState ,useContext}from 'react';
import { View , StyleSheet, Text ,Button, Platform , Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PhotoManipulator from 'react-native-photo-manipulator';
import { ImageContext } from '../context/ImageProcessing/ImageContext';

const DateOnImage = ({ url, onPress }) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const { image, updateImage } = useContext(ImageContext);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      imageManipulate();
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
      setShow(true);
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    const imageManipulate = () => {
      const texts = [
        { position: { x: 50, y: 300 }, text: date, textSize: 60, color: "white", thickness:10 },
      ];
  
      PhotoManipulator.printText(image, texts).then(path => {
        console.log(`Result image path: ${path}`);
        updateImage(path)
      });
    };
  
    return (
      <View>
        <View>
          <Button onPress={()=>showDatepicker()} title="Show date picker!" />
        </View>
        {show !== false ?
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          /> :
          <View style={{flex:1}}>
          <Image
          source={{uri:image}}
          style={{height:100,width:"100%"}}/>
         </View>
        }
       
      </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center'
      },
});

export default DateOnImage;