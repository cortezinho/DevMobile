import React, { useState, useEffect } from 'react'; // Importa React e os hooks useState e useEffect
import { View, Text, Button, StyleSheet } from 'react-native'; // Importa componentes essenciais do React Native
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage para armazenamento persistente

export default function App() {
  const [usuario, setUsuario] = useState(null); // Declara uma variável de estado 'usuario'
  const [mensagem, setMensagem] = useState(''); // Declara uma variável de estado 'mensagem'

  useEffect(() => {
    carregarUsuario(); // Executa ao montar o componente
  }, []);

  const salvarUsuario = async () => {
    const novoUsuario = { nome: 'João', idade: 30, email: 'joao@email.com' };
    try {
      const jsonValue = JSON.stringify(novoUsuario); // Converte o objeto para string JSON
      await AsyncStorage.setItem('usuarioInfo', jsonValue); // Salva a string no AsyncStorage
      setMensagem('Usuário salvo!');
      carregarUsuario(); // Atualiza a interface com os dados salvos
    } catch (error) {
      setMensagem('Erro ao salvar o usuário: ' + error); // Mostra erro se houver
    }
  };

  const carregarUsuario = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('usuarioInfo'); // Recupera a string JSON
      if (jsonValue !== null) {
        setUsuario(JSON.parse(jsonValue)); // Converte JSON para objeto e atualiza o estado
      } else {
        setUsuario(null); // Se não houver nada salvo
      }
    } catch (error) {
      console.error('Erro ao carregar o usuário:', error);
      setMensagem('Erro ao carregar o usuário.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Informações do Usuário:</Text>
      <Text>{usuario ? `Nome: ${usuario.nome}` : 'Nenhum usuario salvo.'}</Text>
      <Text>{usuario ? `Idade: ${usuario.idade}` : ''}</Text>
      <Text>{usuario ? `Email: ${usuario.email}` : ''}</Text>
      <Button title="Salvar Usuário" onPress={salvarUsuario} />
      <Text style={styles.mensagem}>{mensagem}</Text>
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
