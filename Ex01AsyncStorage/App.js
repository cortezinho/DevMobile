import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App(){
  const [nome, setNome] = useState('')

  const [mensagem, setMensagem] = useState('')


  const salvarNome = async () => {
    try{
      await AsyncStorage.setItem('nomeUsuario' , nome)

      setMensagem('Nome salvo com sucesso!')
      setNome('')
    } catch (error){
      setMensagem('Erro ao salvaro nome: ' + error)
    }
  }

  return (
    <View style = {styles.container}>
      <TextInput
        style = {styles.input}
        value = {nome}
        onChangeText={setNome}></TextInput>
        <Button title="Salvar nome" onPress={salvarNome}></Button>
        <Text style = {styles.mensagem}>{mensagem}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  mensagem: {
    marginTop: 10,
    fontWeight: 'bold',
  },
})