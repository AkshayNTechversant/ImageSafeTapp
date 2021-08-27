import React  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Camera from '../screens/Camera';
import PreviewScreen from '../screens/PreviewScreen';
import ImageCanvas from '../screens/ImageCanvas';
import WorkSpace from '../screens/Workspace';

const Stack = createNativeStackNavigator();

const MainStack = () =>{
    return(
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
        <Stack.Screen name="ImageCanvas" component={ImageCanvas} />
        <Stack.Screen name="Workspace" component={WorkSpace} />
       </Stack.Navigator>
    );
};

export default MainStack;