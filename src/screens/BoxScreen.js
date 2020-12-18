import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
    <View style={styles.viewStyle}>
        <View style={styles.red}/>
        <View style={styles.purple}/>
        <View style={styles.green}/>
    </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    red:{
        backgroundColor: 'red',  
        height:50,
        width: 50,  
    },
    purple:{
       backgroundColor: 'purple',
       height:50,
       width: 50,
    },
    green:{
       backgroundColor: 'green',
       height:50,
       width: 50,
       alignSelf: 'flex-end'
        
    }
});

export default BoxScreen;