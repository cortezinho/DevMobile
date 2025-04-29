//importa o react para utilizar componentes e JSX
import React from "react";

//importa os componentes Text, view w Flatlist da biblioteca React native
import { Text, View, FlatList } from "react-native";

//importa os estilos definidos no arquivo styles.js
import styles from "./styles"

//importa o componente ListContainer que gerencia a logica da lista
import ListContainer from "./LisrContainer"

//função principa do aplicativo, responsavel por renderizar a interface
export default function App(){
  return(
    //container principal com estilo aplicado
    <View style={styles.container}>
      <ListContainer />
    </View>
  )
}