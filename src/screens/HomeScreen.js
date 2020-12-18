import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//(props) kullanıp aşağıda propsçnavitation.navigate kullanmak yerine direkt {navigation} yazarak tüm props obj değil navigation ı kullanabiliriz
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style = {styles.textStyle}>This is the home screen, hi there!</Text>
      <Button 
        title="Go to Components Demo"
        //props.navigation.navigate("Components")
        onPress={() => navigation.navigate("Components")}
      />
      <Button 
        onPress = {() => navigation.navigate("List")}
        title= "Go to List Demo">
      </Button>
      <Button 
        onPress = {() => navigation.navigate("Image")}
        title= "Go to Image Demo">
      </Button>
      <Button 
        onPress = {() => navigation.navigate("Counter")}
        title= "Go to Counter Demo">
      </Button>
      <Button 
        onPress = {() => navigation.navigate("Color")}
        title= "Go to Color Demo">
      </Button>
      <Button 
        onPress = {() => navigation.navigate("Square")}
        title= "Go to Square Demo">
      </Button>
      <Button 
        onPress = {() => navigation.navigate("Text")}
        title= "Go to Text Demo">
      </Button>
      <Button 
        onPress = {() => navigation.navigate("Box")}
        title= "Go to Box Demo">
      </Button>

    </View>
  );
  // <TouchableOpacity onPress = {() => navigation.navigate("List")}>
  //<Text>Go to List Demo</Text>
  //</TouchableOpacity>
};

const styles = StyleSheet.create({
  textStyle: {
      fontSize: 50

  }
});



export default HomeScreen;
