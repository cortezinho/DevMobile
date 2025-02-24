import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciar estados.
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
  //Slider, // Comentado, pois pode não estar disponível no React Native atualmente.
  Switch,
  StyleSheet,
} from 'react-native'; // Importa componentes básicos do React Native para UI.

import logoX from './assets/NativeLogo.png'; // Importa uma imagem local.

const App = () => {
  // Estados para gerenciar valores dinâmicos na interface do usuário.
  const [text, setText] = useState(''); // Estado para armazenar o texto digitado no input.
  const [isLoading, setIsLoading] = useState(false); // Estado para indicar carregamento.
  const [sliderValue, setSliderValue] = useState(0); // Estado para armazenar o valor do Slider (componente comentado).
  const [switchValue, setSwitchValue] = useState(false); // Estado para armazenar o valor do Switch (ligado/desligado).

  // Dados para uma FlatList, representando uma lista simples.
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList, onde os itens são agrupados em seções.
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

  // Função chamada ao pressionar o botão.
  const handleButtonPress = () => {
    setIsLoading(true); // Ativa o indicador de carregamento.
    setTimeout(() => {
      setIsLoading(false); // Desativa o indicador após 2 segundos.
      alert('Button Pressed!'); // Exibe um alerta na tela.
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      {' '}
      {/* Componente para permitir rolagem na tela */}
      <View style={styles.view}>
        <Text style={styles.text}>Sheila React Native1</Text>{' '}
        {/* Texto de título */}
        <Image source={logoX} style={styles.image} />{' '}
        {/* Exibe a imagem importada */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter text" // Texto de dica no input.
          value={text} // Liga o input ao estado `text`.
          onChangeText={setText} // Atualiza o estado ao digitar.
        />
        <Button title="Press Me" onPress={handleButtonPress} />{' '}
        {/* Botão que chama handleButtonPress ao ser pressionado */}
        <TouchableOpacity style={styles.touchableOpacity}>
          {' '}
          {/* Botão customizado com TouchableOpacity */}
          <Text style={styles.touchableOpacityText}>Touch Me</Text>
        </TouchableOpacity>
        <ActivityIndicator animating={isLoading} />{' '}
        {/* Indicador de carregamento baseado no estado `isLoading` */}
        <Text>Slider Value: {sliderValue}</Text> {/* Exibe o valor do slider */}
        <Switch value={switchValue} onValueChange={setSwitchValue} />{' '}
        {/* Switch para alternar entre ligado e desligado */}
        <Text>Switch Value: {switchValue ? 'On' : 'Off'}</Text>{' '}
        {/* Exibe o estado atual do switch */}
      </View>
      {/* Lista simples de itens usando FlatList */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Converte o id para string (evita erros)
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item da lista
      />
      {/* Lista com seções usando SectionList */}
      <SectionList
        sections={sections} // Usa os dados estruturados em seções
        keyExtractor={(item) => item.id.toString()} // Converte id para string
        renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza os itens da seção
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text> // Exibe o título da seção com um estilo diferenciado
        )}
      />
    </ScrollView>
  );
};

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela.
    padding: 20, // Espaçamento interno.
  },
  view: {
    marginBottom: 20, // Espaçamento inferior.
  },
  text: {
    fontSize: 20, // Tamanho do texto.
    marginBottom: 10, // Espaçamento inferior.
  },
  image: {
    width: 100, // Largura da imagem.
    height: 100, // Altura da imagem.
    marginBottom: 10, // Espaçamento inferior.
  },
  textInput: {
    height: 40, // Altura do campo de input.
    borderColor: 'gray', // Cor da borda.
    borderWidth: 1, // Espessura da borda.
    marginBottom: 10, // Espaçamento inferior.
    paddingHorizontal: 10, // Espaçamento interno horizontal.
  },
  touchableOpacity: {
    backgroundColor: 'blue', // Cor de fundo do botão.
    padding: 10, // Espaçamento interno.
    borderRadius: 5, // Arredondamento das bordas.
    marginBottom: 10, // Espaçamento inferior.
  },
  touchableOpacityText: {
    color: 'white', // Cor do texto do botão.
  },
  sectionHeader: {
    fontSize: 18, // Tamanho do texto da seção.
    fontWeight: 'bold', // Deixa o texto em negrito.
    marginTop: 20, // Espaçamento superior.
    marginBottom: 10, // Espaçamento inferior.
  },
});

export default App; // Exporta o componente App para ser usado em outros arquivos.
