// Importa as bibliotecas necessárias do React e React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import logoX from './assets/NativeLogo.png';

// Define o componente principal do aplicativo
const App = () => {
  // Define estados para armazenar o nome e a mensagem
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função que é chamada quando o botão "Enviar" é pressionado
  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}`);
    }
  };

  // Retorna a estrutura da interface do usuário
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        {/* Exibe uma imagem */}
        <Image source={{ uri: 'logoX' }} style={styles.image} />
        {/* Exibe um texto de exemplo */}
        <Text style={styles.text}>
          Exemplo de elementos gráficos interativos em React Native
        </Text>
      </View>

      {/* Contêiner para o campo de entrada e o botão "Enviar" */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={setNome}
          value={nome}
        />
        <Button title="Enviar" onPress={lidarComClique} />
      </View>

      {/* Exibe a mensagem se ela existir */}
      {mensagem ? (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{mensagem}</Text>
        </View>
      ) : null}

      {/* Botão customizado */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Botão customizado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Define os estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    padding: 20, // Adiciona um padding de 20 unidades
  },
  view: {
    alignItems: 'center', // Centraliza os itens horizontalmente
    marginBottom: 20, // Adiciona uma margem inferior de 20 unidades
  },
  image: {
    width: 100, // Define a largura da imagem como 100 unidades
    height: 100, // Define a altura da imagem como 100 unidades
    marginBottom: 10, // Adiciona uma margem inferior de 10 unidades
  },
  text: {
    fontSize: 20, // Define o tamanho da fonte como 20 unidades
    fontWeight: 'bold', // Define o peso da fonte como negrito
  },
  inputContainer: {
    marginBottom: 20, // Adiciona uma margem inferior de 20 unidades
  },
  input: {
    height: 40, // Define a altura do campo de entrada como 40 unidades
    borderColor: 'gray', // Define a cor da borda como cinza
    borderWidth: 1, // Define a largura da borda como 1 unidade
    marginBottom: 10, // Adiciona uma margem inferior de 10 unidades
    paddingHorizontal: 10, // Adiciona um padding horizontal de 10 unidades
  },
  messageContainer: {
    marginBottom: 20, // Adiciona uma margem inferior de 20 unidades
  },
  message: {
    fontSize: 16, // Define o tamanho da fonte como 16 unidades
  },
  button: {
    backgroundColor: 'blue', // Define a cor de fundo do botão como azul
    padding: 10, // Adiciona um padding de 10 unidades
    borderRadius: 5, // Define o raio da borda como 5 unidades
    alignItems: 'center', // Centraliza o conteúdo do botão horizontalmente
  },
  buttonText: {
    color: 'white', // Define a cor do texto como branco
    fontSize: 16, // Define o tamanho da fonte como 16 unidades
    fontWeight: 'bold', // Define o peso da fonte como negrito
  },
});

// Exporta o componente App para ser usado como ponto de entrada do aplicativo
export default App;
