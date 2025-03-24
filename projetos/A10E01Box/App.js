import React from "react";
import {Text, View} from 'react-native';
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}> Isto é uma caixa</Text>
    </View>
    </View>
  )
}