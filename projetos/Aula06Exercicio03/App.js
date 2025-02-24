// Importa o React e o hook useState para gerenciar estados
import React, { useState } from 'react';

// Importa componentes básicos do React Native para construir a interface do usuário
import {
  View, // Contêiner para organizar elementos em um layout
  Text, // Componente para exibir texto
  Image, // Exibe imagens na interface
  TextInput, // Campo de entrada de texto
  Button, // Botão interativo
  TouchableOpacity, // Componente de toque personalizável
  ScrollView, // Habilita rolagem na tela
  FlatList, // Lista de elementos renderizados dinamicamente
  SectionList, // Lista estruturada em seções
  ActivityIndicator, // Indicador de carregamento (loading)
  // Slider, // Componente comentado, possivelmente desativado
  Switch, // Componente para alternância (on/off)
  ImageBackground, // Exibe uma imagem de fundo
  StyleSheet, // Permite a estilização dos componentes
} from 'react-native';

// Importa a imagem local para ser usada na interface
import logoX from './assets/NativeLogo.png';

// Componente principal da aplicação
const App = () => {
  // Estados para gerenciar valores dinâmicos na interface do usuário
  const [text, setText] = useState(''); // Armazena o valor do campo de texto
  const [isLoading, setIsLoading] = useState(false); // Controla a exibição do indicador de carregamento
  const [sliderValue, setSliderValue] = useState(0); // Estado do slider (componente comentado)
  const [switchValue, setSwitchValue] = useState(false); // Estado do switch (true = ligado, false = desligado)

  // Dados para a FlatList (lista simples)
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Dados para a SectionList (lista organizada por seções)
  const sections = [
    {
      title: 'Section 1', // Título da seção
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Section 2', // Segunda seção
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  // Função chamada ao pressionar o botão
  const handlePress = () => {
    setIsLoading(true); // Ativa o indicador de carregamento
    setTimeout(() => {
      setIsLoading(false); // Desativa o carregamento após 2 segundos
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}> {/* Permite rolagem na tela inteira */}
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/300' }} // Define uma imagem de fundo vinda da internet
        style={styles.imageBackground}
      >
        <Text style={styles.title}>Exemplo de Código React Native</Text> {/* Título na imagem de fundo */}
      </ImageBackground>

      <View style={styles.content}> {/* Contêiner para organizar os elementos */}
        <Image source={logoX} style={styles.image} /> {/* Exibe a imagem importada */}

        <TextInput
          style={styles.input}
          placeholder="Digite algo" // Placeholder dentro do campo de entrada
          value={text} // Liga o input ao estado `text`
          onChangeText={setText} // Atualiza o estado ao digitar
        />

        <Button title="Clique aqui" onPress={handlePress} /> {/* Botão que ativa o carregamento ao ser pressionado */}

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('TouchableOpacity pressionado!')} // Exibe um alerta ao tocar
        >
          <Text style={styles.buttonText}>TouchableOpacity</Text> {/* Texto dentro do botão personalizável */}
        </TouchableOpacity>

        <ActivityIndicator animating={isLoading} /> {/* Indicador de carregamento baseado no estado `isLoading` */}

        <Text>Valor do Slider: {sliderValue}</Text> {/* Exibe o valor do slider (não funcional pois está comentado) */}

        <Switch value={switchValue} onValueChange={setSwitchValue} /> {/* Componente switch para alternância */}
        <Text>Valor do Switch: {switchValue ? 'Ligado' : 'Desligado'}</Text> {/* Exibe estado atual do switch */}

        {/* Lista de itens simples usando FlatList */}
        <FlatList
          data={data} // Define os dados da lista
          keyExtractor={(item) => item.id.toString()} // Converte `id` para string para evitar erros
          renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item da lista
        />

        {/* Lista estruturada em seções usando SectionList */}
        <SectionList
          sections={sections} // Define os dados divididos por seções
          keyExtractor={(item) => item.id.toString()} // Converte `id` para string
          renderItem={({ item }) => <Text>{item.name}</Text>} // Renderiza cada item dentro da seção
          renderSectionHeader={({ section: { title } }) => ( // Renderiza o título de cada seção
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
  },
  imageBackground: {
    height: 200, // Altura da imagem de fundo
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  title: {
    fontSize: 24, // Tamanho do texto
    fontWeight: 'bold', // Deixa o texto em negrito
    color: 'white', // Define a cor do texto como branco
  },
  content: {
    padding: 20, // Adiciona espaçamento interno
  },
  image: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    marginBottom: 10, // Espaçamento inferior
  },
  input: {
    height: 40, // Altura do campo de entrada
    borderColor: 'gray', // Cor da borda
    borderWidth: 1, // Espessura da borda
    marginBottom: 10, // Espaçamento inferior
    paddingHorizontal: 10, // Espaçamento interno horizontal
  },
  button: {
    backgroundColor: 'blue', // Define a cor de fundo do botão
    padding: 10, // Adiciona espaçamento interno
    borderRadius: 5, // Arredondamento das bordas
    marginBottom: 10, // Espaçamento inferior
  },
  buttonText: {
    color: 'white', // Define a cor do texto como branco
    textAlign: 'center', // Centraliza o texto no botão
  },
  sectionHeader: {
    fontSize: 18, // Define o tamanho do texto da seção
    fontWeight: 'bold', // Define a fonte em negrito
    marginTop: 20, // Espaçamento superior
    marginBottom: 10, // Espaçamento inferior
  },
});

// Exporta o componente App para ser utilizado em outros arquivos
export default App;
