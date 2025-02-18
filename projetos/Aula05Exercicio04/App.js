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
  FlatList,
  SectionList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import logoX from './assets/NativeLogo.png'; // Importa uma imagem local

// Define o componente principal do aplicativo
const App = () => {
  // Define estados para armazenar o texto digitado e o estado de carregamento
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Função que é chamada quando o botão é pressionado
  const handlePress = () => {
    setIsLoading(true); // Ativa o indicador de carregamento
    setTimeout(() => {
      setIsLoading(false); // Desativa o indicador de carregamento após 2 segundos
      alert('Botão pressionado!'); // Exibe um alerta
    }, 2000);
  };

  // Dados para a FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList, organizados em seções
  const sections = [
    {
      title: 'Seção 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Seção 2',
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  // Retorna a estrutura da interface do usuário
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Olá, mundo!</Text> {/* Exibe um texto */}
        <Image source={logoX} style={styles.image} />{' '}
        {/* Exibe uma imagem local */}
        <TextInput
          style={styles.textInput}
          placeholder="Digite algo"
          value={text}
          onChangeText={setText} // Atualiza o estado 'text' quando o texto é alterado
        />
        <Button title="Clique aqui" onPress={handlePress} />{' '}
        {/* Botão padrão */}
        <TouchableOpacity style={styles.touchableOpacity} onPress={handlePress}>
          <Text style={styles.touchableOpacityText}>Toque aqui</Text>{' '}
          {/* Botão customizado */}
        </TouchableOpacity>
        <ActivityIndicator animating={isLoading} />{' '}
        {/* Indicador de carregamento */}
      </View>
      {/* FlatList para exibir uma lista de itens */}
      <FlatList
        data={data} // Dados da lista
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item
        keyExtractor={(item) => item.id.toString()} // Extrai a chave única para cada item
      />
      {/* SectionList para exibir uma lista de seções */}
      <SectionList
        sections={sections} // Dados das seções
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item
        renderSectionHeader={(
          { section: { title } } // Renderiza o cabeçalho da seção
        ) => <Text style={styles.sectionHeader}>{title}</Text>}
        keyExtractor={(item) => item.id.toString()} // Extrai a chave única para cada item
      />
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
    marginBottom: 20, // Adiciona uma margem inferior de 20 unidades
  },
  text: {
    fontSize: 20, // Define o tamanho da fonte como 20 unidades
    marginBottom: 10, // Adiciona uma margem inferior de 10 unidades
  },
  image: {
    width: 100, // Define a largura da imagem como 100 unidades
    height: 100, // Define a altura da imagem como 100 unidades
    marginBottom: 10, // Adiciona uma margem inferior de 10 unidades
  },
  textInput: {
    height: 40, // Define a altura do campo de entrada como 40 unidades
    borderColor: 'gray', // Define a cor da borda como cinza
    borderWidth: 1, // Define a largura da borda como 1 unidade
    marginBottom: 10, // Adiciona uma margem inferior de 10 unidades
    paddingHorizontal: 10, // Adiciona um padding horizontal de 10 unidades
  },
  touchableOpacity: {
    backgroundColor: 'blue', // Define a cor de fundo como azul
    padding: 10, // Adiciona um padding de 10 unidades
    borderRadius: 5, // Define o raio da borda como 5 unidades
    marginBottom: 10, // Adiciona uma margem inferior de 10 unidades
  },
  touchableOpacityText: {
    color: 'white', // Define a cor do texto como branco
    textAlign: 'center', // Centraliza o texto
  },
  sectionHeader: {
    fontSize: 18, // Define o tamanho da fonte como 18 unidades
    fontWeight: 'bold', // Define o peso da fonte como negrito
    marginTop: 20, // Adiciona uma margem superior de 20 unidades
    marginBottom: 10, // Adiciona uma margem inferior de 10 unidades
  },
});

// Exporta o componente App para ser usado como ponto de entrada do aplicativo
export default App;
