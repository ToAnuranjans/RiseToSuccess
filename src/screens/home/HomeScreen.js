import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

import { USERS } from '../constants';



const HomeScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate(USERS)} title="Details" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default HomeScreen;
