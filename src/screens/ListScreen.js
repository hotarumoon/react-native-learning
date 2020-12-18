import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        // keys can be added like so: { name: 'Friend#1', key: '1' },   key should be unique and string
        { name: 'Friend#1' , age: 20 }, 
        { name: 'Friend#2' , age: 24 }, 
        { name: 'Friend#3' , age: 29 }, 
        { name: 'Friend#4' , age: 28 }, 
        { name: 'Friend#5' , age: 25 }, 
        { name: 'Friend#6' , age: 20 }, 
        { name: 'Friend#7' , age: 21 }, 
        { name: 'Friend#8' , age: 20 }, 
        { name: 'Friend#9' , age: 32 }, 
        { name: 'Friend#10' , age: 30 }
    ];
    return (
    <FlatList 
        //horizontal
        //showsHorizontalScrollIndicator={false}
        //second way of giving keys is using keyExtractor. Here unique name property is also used as key
        keyExtractor={(friend)=>friend.name}
        data={friends} 
        renderItem={ ({item}) => {
            //element === { item: {name: 'Friend#1'}, index: 0}
            //{item} == {name: 'Friend#1'}
            return <Text style={styles.textStye}>{item.name}  - Age:  {item.age} </Text>
        }}/>
    );
};

const styles = StyleSheet.create({
    textStye: {
        marginVertical: 50
    }
});

export default ListScreen;