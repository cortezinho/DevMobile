// Importa os módulos necessários do React e React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import logoX from './assets/NativeLogo.png';

// Componente principal do aplicativo
const App = () => {
  // Define um estado para armazenar o nome digitado pelo usuário
  const [nome, setNome] = useState('');

  // Define um estado para armazenar a mensagem exibida ao usuário
  const [mensagem, setMensagem] = useState('');

  // Função chamada ao pressionar o botão "Enviar"
  const lidarComClique = () => {
    if (nome) {
      // Se o nome foi digitado, exibe uma saudação personalizada
      setMensagem(`Olá, ${nome}!`);
    } else {
      // Se o campo estiver vazio, exibe um alerta pedindo para digitar o nome
      setMensagem('Por favor, digite seu nome.');
    }
  };

  return (
    // Container principal que engloba todos os elementos da interface
    <View style={styles.container}>
      {/* Exibe uma imagem do React Native */}
      <Image source={{ uri: 'logoX' }} style={styles.logo} />

      {/* Título do aplicativo */}
      <Text style={styles.titulo}>Exemplo de App Interativo</Text>

      {/* Campo de entrada de texto para digitar o nome */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={setNome} // Atualiza o estado com o valor digitado
        value={nome} // Mantém o valor atualizado no campo de texto
      />

      {/* Botão que chama a função lidarComClique ao ser pressionado */}
      <Button title="Enviar" onPress={lidarComClique} />

      {/* Botão estilizado com TouchableOpacity */}
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Clique Aqui</Text>
      </TouchableOpacity>

      {/* Exibe a mensagem de saudação ou aviso */}
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    justifyContent: 'center', // Centraliza os elementos verticalmente
    alignItems: 'center', // Centraliza os elementos horizontalmente
    padding: 20, // Adiciona um espaçamento interno
  },
  logo: {
    width: 150, // Define a largura da imagem
    height: 150, // Define a altura da imagem
    marginBottom: 20, // Adiciona espaçamento abaixo da imagem
  },
  titulo: {
    fontSize: 24, // Define o tamanho da fonte
    fontWeight: 'bold', // Deixa o texto em negrito
    marginBottom: 20, // Adiciona espaçamento abaixo do título
  },
  input: {
    width: '100%', // Ocupar toda a largura disponível
    height: 40, // Altura do campo de entrada
    borderColor: 'gray', // Cor da borda
    borderWidth: 1, // Espessura da borda
    marginBottom: 20, // Espaçamento abaixo do campo de entrada
    paddingHorizontal: 10, // Adiciona espaçamento interno horizontal
  },
  botao: {
    backgroundColor: 'blue', // Cor de fundo do botão
    padding: 10, // Adiciona espaçamento interno
    borderRadius: 5, // Arredonda as bordas do botão
    marginTop: 20, // Espaçamento acima do botão
  },
  textoBotao: {
    color: 'white', // Cor do texto do botão
    fontWeight: 'bold', // Deixa o texto em negrito
  },
  mensagem: {
    marginTop: 20, // Adiciona espaçamento acima da mensagem
    fontSize: 16, // Define o tamanho da fonte
  },
});

// Exporta o componente para ser utilizado em outros arquivos
export default App;
