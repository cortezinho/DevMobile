// Importando os módulos necessários do React e React Native
import React, { useState } from 'react'; // React e hook useState
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native'; // Componentes do React Native

// Componente principal da aplicação
const App = () => {
  // Declaração dos estados para armazenar o nome e a mensagem
  const [nome, setNome] = useState(''); // Estado 'nome', inicialmente vazio
  const [mensagem, setMensagem] = useState(''); // Estado 'mensagem', inicialmente vazio

  // Função que será chamada quando o botão "Enviar" for pressionado
  const lidarComClique = () => {
    if (nome) { // Verifica se o nome foi preenchido
      setMensagem(`Olá, ${nome} !`); // Se o nome estiver preenchido, exibe a mensagem de saudação
    } else {
      setMensagem('Por favor, digite seu nome. '); // Se o nome não foi preenchido, pede para o usuário digitar
    }
  };

  // Retorno da interface do usuário
  return (
    <View style={styles.container}>
      {/* Exibe uma imagem da logo do React Native */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }} // Link da imagem
        style={styles.logo} // Estilo aplicado à imagem
      />

      {/* Título do aplicativo */}
      <Text style={styles.titulo}>Exemplo Interativo</Text>

      {/* Campo de entrada de texto para o nome do usuário */}
      <TextInput
        style={styles.input} // Estilo aplicado ao campo de texto
        placeholder="Digite seu nome" // Texto exibido quando o campo está vazio
        onChangeText={setNome} // Atualiza o estado 'nome' com o texto digitado
        value={nome} // O valor do campo de texto é o estado 'nome'
      />

      {/* Botão "Enviar", que chama a função lidarComClique ao ser pressionado */}
      <Button title="Enviar" onPress={lidarComClique} />

      {/* Exibe a mensagem abaixo do botão, caso o estado 'mensagem' não esteja vazio */}
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};

// Definição dos estilos para a interface
const styles = StyleSheet.create({
  container: {
    flex: 1, // O contêiner ocupa toda a tela
    justifyContent: 'center', // Alinha os itens no centro verticalmente
    alignItems: 'center', // Alinha os itens no centro horizontalmente
    padding: 20, // Adiciona um espaço interno de 20 unidades
  },
  logo: {
    width: 150, // Largura da imagem da logo
    height: 150, // Altura da imagem da logo
    marginBottom: 20, // Espaço abaixo da imagem
  },
  titulo: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold', // Deixa o título em negrito
    marginBottom: 20, // Espaço abaixo do título
  },
  input: {
    width: '100%', // O campo de texto ocupa toda a largura disponível
    height: 40, // Altura do campo de texto
    borderColor: 'gray', // Cor da borda do campo de texto
    borderWidth: 1, // Largura da borda
    marginBottom: 20, // Espaço abaixo do campo de texto
    paddingHorizontal: 10, // Espaço interno horizontal (em ambos os lados do texto)
  },
  mensagem: {
    marginTop: 20, // Espaço acima da mensagem
    fontSize: 16, // Tamanho da fonte da mensagem
  },
});

// Exporta o componente para ser utilizado em outros lugares
export default App;
