import React from 'react';
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
  const ege = 'Ege'
  const respect = 'Respect my authority!';
  const cartman = <Text style={styles.subtext}>The Hallway monitor</Text>
  return (
    <View>
      <Text style={styles.header}>{ege} Rocks</Text>
      <Text style={{fontSize: 20}}>{respect}</Text>
      {cartman}
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
      fontSize: 45
    },
    subtext:{
      fontSize: 15
    }
  });

export default ComponentsScreen;