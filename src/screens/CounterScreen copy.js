import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


//Props: System to pass data from parent to a child
//State: System to track a piece of data that will change over time. If that data changes, the app will 'render' 
const CounterScreen = () => {
    const [counter, setCounter ] = useState(0); //0: initial state value 
    return (
    <View>
        <Button title="Increase" onPress={() => {
            //counter ++;
            setCounter(counter + 1);
        }}></Button>
        <Button title="Decrease" onPress = {() =>{
            //counter --;
           setCounter(counter - 1);
        }}></Button>
        <Text>Current Count: {counter}</Text>
    </View>
    
    );

};

const styles = StyleSheet.create({});

export default CounterScreen;