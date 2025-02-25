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
  //Slider,
  Switch,
  ImageBackground,
  Modal,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [imageSource, setImageSource] = useState(
    require('./assets/NativeLogo.png')
  ); // Substitua pelo caminho da sua imagem
  const [isLoading, setIsLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [switchValue, setSwitchValue] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

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

  const handleButtonPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setModalVisible(true);
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('./assets/NativeLogo.png')}
        style={styles.imageBackground}
      >
        <Text style={styles.title}>Exemplo de Componentes Interativos</Text>
      </ImageBackground>

      <View style={styles.content}>
        <Image source={imageSource} style={styles.image} />

        <TextInput
          style={styles.input}
          placeholder="Digite algo"
          onChangeText={setText}
        />

        <Button title="Clique aqui" onPress={handleButtonPress} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('TouchableOpacity Pressed')}
        >
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        {isLoading && <ActivityIndicator animating={isLoading} />}

        <Text>Valor do Slider: {sliderValue}</Text>

        <Switch value={switchValue} onValueChange={setSwitchValue} />
        <Text>Valor do Switch: {switchValue ? 'Ligado' : 'Desligado'}</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Modal Aberto!</Text>
          <Button title="Fechar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
