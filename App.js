import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Account from './src/Account';
import Userdata from './src/Users';
import Studentdata from './src/Students';

import { Divider } from 'react-native-paper';
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Account />
        <Divider />
        <Userdata />
        <Divider />
        <Studentdata/>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16
  },
});