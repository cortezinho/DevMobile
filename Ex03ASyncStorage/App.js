import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [mensagem, setMensagem] = useState('');
  const removerNome = async () => {
    try {
      await AsyncStorage.removeItem('nomeUsuario');
      setMensagem('Nome removido com sucesso!');
    } catch (error) {
      setMensagem('Erro ao remover o nome: ' + error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mensagem}>{mensagem}</Text>
      <Button title="Remover nome salvo" onPress={removerNome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mensagem: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});