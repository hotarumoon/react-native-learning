import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';


//Props: System to pass data from parent to a child
//State: System to track a piece of data that will change over time. If that data changes, the app will 'render' 
const ImageScreen = () => {

    return (
    <View>
        <ImageDetail title = "Forest" imageSource={require("../../assets/forest.jpg")} score="9"/>
        <ImageDetail title = "Beach" imageSource={require("../../assets/beach.jpg")} score="10"/>
        <ImageDetail title = "Mountain" imageSource={require("../../assets/mountain.jpg")} score="8"/>
    </View>
    
    );

};

const styles = StyleSheet.create({});

export default ImageScreen;