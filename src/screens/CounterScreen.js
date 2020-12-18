import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


//Props: System to pass data from parent to a child
//State: System to track a piece of data that will change over time. If that data changes, the app will 'render' 

const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {...state, counter: state.counter + action.payload};
        case 'decrease':
            return {... state, counter: state.counter - action.payload};
        default:
            return state;

    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0}); 
    return (
    <View>
        <Button title="Increase" onPress={() => {
            //counter ++;
            dispatch({type: 'increase', payload: 1 });
        }}></Button>
        <Button title="Decrease" onPress = {() =>{
            //counter --;
           dispatch({type: 'decrease', payload: -1});
        }}></Button>
        <Text>Current Count: {state.counter}</Text>
    </View>
    
    );

};

const styles = StyleSheet.create({});

export default CounterScreen;