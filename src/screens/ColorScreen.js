import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState(0);
    console.log(colors);
    return(
        <View>
            <Button title= "Add a color" onPress={() => {
                //... means copy the array colors and add that to the new array here
                setColors([...colors, randomRGB()])
            }}/>
            
            <FlatList
                keyExtractor={(item)=> {item}}
                data={colors}
                renderItem={({item}) => {
                    return <View style= {{ height: 100, width:100, backgroundColor: item}}></View>
                }}
            /> 
        </View>

    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    //return a template string with backticks (``) option + ; 
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({

});
export default ColorScreen;