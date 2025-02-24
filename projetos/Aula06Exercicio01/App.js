// Importa o React e o hook useState para gerenciar estados no componente
import React, { useState } from 'react';

// Importa componentes do React Native para construir a interface
import {
  View, // Contêiner para organizar layouts
  Text, // Exibe textos na tela
  Image, // Exibe imagens
  TextInput, // Campo de entrada de texto
  Button, // Botão clicável
  TouchableOpacity, // Botão customizável
  ScrollView, // Permite rolagem de conteúdo
  FlatList, // Lista otimizada para grandes conjuntos de dados
  SectionList, // Lista com seções agrupadas
  ActivityIndicator, // Indicador de carregamento (spinner)
  //Slider, // Comentado, provavelmente não está sendo usado
  StyleSheet, // Permite criar estilos para os componentes
} from 'react-native';

// Importa uma imagem local
import logoX from './assets/NativeLogo.png';

// Define o componente principal da aplicação
const App = () => {
  // Declara um estado para armazenar o texto digitado no TextInput
  const [text, setText] = useState('');
  // Estado para armazenar a largura da imagem
  const [imageWidth, setImageWidth] = useState(200);
  // Estado para controlar a exibição do indicador de carregamento
  const [isLoading, setIsLoading] = useState(false);
  // Estado para armazenar o valor do slider (embora não esteja presente no código)
  const [sliderValue, setSliderValue] = useState(0);

  // Lista de itens simples usada no FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Lista de seções para a SectionList
  const sections = [
    {
      title: 'Section 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] },
  ];

  // Função chamada ao pressionar o botão
  const handlePress = () => {
    setIsLoading(true); // Ativa o indicador de carregamento
    setTimeout(() => {
      setIsLoading(false); // Desativa o indicador após 2 segundos
      alert('Button pressed!'); // Exibe um alerta
    }, 2000);
  };

  return (
    // Habilita a rolagem da tela quando o conteúdo ultrapassa o tamanho visível
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        {/* Exibe um texto na tela */}
        <Text style={styles.text}>Hello React Native!</Text>

        {/* Exibe uma imagem com largura dinâmica */}
        <Image source={logoX} style={[styles.image, { width: imageWidth }]} />

        {/* Campo de entrada de texto controlado pelo estado 'text' */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter text"
          value={text}
          onChangeText={setText}
        />

        {/* Botão que chama a função handlePress ao ser pressionado */}
        <Button title="Press me" onPress={handlePress} />

        {/* Botão customizado para aumentar a largura da imagem */}
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => setImageWidth(imageWidth + 50)}
        >
          <Text style={styles.touchableOpacityText}>Increase Image Width</Text>
        </TouchableOpacity>

        {/* Indicador de carregamento visível quando isLoading é true */}
        <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />

        {/* Exibe o valor do slider, embora ele não esteja presente na UI */}
        <Text>Slider Value: {sliderValue.toFixed(0)}</Text>
      </View>

      {/* Lista simples renderizando os itens do array 'data' */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Define uma chave única para cada item
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza o nome do item
      />

      {/* Lista com seções renderizando os itens do array 'sections' */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()} // Define uma chave única para cada item
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza o nome do item
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text> // Renderiza o título da seção
        )}
      />
    </ScrollView>
  );
};

// Define os estilos usados no aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    padding: 20, // Adiciona espaçamento interno
  },
  view: {
    marginBottom: 20, // Adiciona espaçamento abaixo do elemento
  },
  text: {
    fontSize: 20, // Define o tamanho da fonte
    marginBottom: 10, // Adiciona espaçamento abaixo do texto
  },
  image: {
    height: 200, // Altura fixa para a imagem
    resizeMode: 'contain', // Mantém a proporção da imagem
    marginBottom: 10, // Adiciona espaçamento abaixo da imagem
  },
  textInput: {
    height: 40, // Define a altura do campo de entrada
    borderColor: 'gray', // Cor da borda
    borderWidth: 1, // Espessura da borda
    marginBottom: 10, // Espaço abaixo do campo
    paddingHorizontal: 10, // Adiciona espaçamento interno nas laterais
  },
  touchableOpacity: {
    backgroundColor: 'lightblue', // Define a cor de fundo
    padding: 10, // Espaçamento interno
    borderRadius: 5, // Arredonda os cantos
    marginBottom: 10, // Adiciona espaçamento abaixo do botão
  },
  touchableOpacityText: {
    color: 'white', // Cor do texto
    textAlign: 'center', // Centraliza o texto
  },
  sectionHeader: {
    fontSize: 18, // Define o tamanho do título da seção
    fontWeight: 'bold', // Deixa o texto em negrito
    marginTop: 20, // Adiciona espaçamento acima do título
    marginBottom: 10, // Adiciona espaçamento abaixo do título
  },
});

// Exporta o componente principal para ser usado no aplicativo
export default App;
