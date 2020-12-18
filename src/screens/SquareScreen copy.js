import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 10;
const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const setColor = (color, change) => {
        //color === 'red', 'green', 'blue'
        //change === +10, -10
        switch(color){
            case 'red':
                change + red >255 || change + red <0 ? null : setRed(red + change);
                return;
            case 'blue':
                change + blue >255 || change + blue <0 ? null : setBlue(blue + change);
                return;
            case 'green':
                change + green >255 || change + green <0 ? null : setGreen(green + change);
                return;
            default:
                return;
        }
            
    }

    return (
    <View>
        <ColorCounter 
            onIncrease={() => setColor('red', COLOR_INCREMENT)} 
            onDecrease={() => setColor('red', -1* COLOR_INCREMENT)}
            color="Red"/>
        <ColorCounter 
            onIncrease={() => setColor('green', COLOR_INCREMENT)} 
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
            color="Green"/>
        <ColorCounter 
            onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
            onDecrease={() => setColor('blue', -1*COLOR_INCREMENT)}
            color="Blue"/>
        <View style={{height: 150, width:150,backgroundColor:`rgb(${red},${green},${blue})` }}/>
    </View>
    );
};

const styles = StyleSheet.create({});   
export default SquareScreen;