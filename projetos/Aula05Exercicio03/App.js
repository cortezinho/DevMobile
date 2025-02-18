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
  StyleSheet,
} from 'react-native';
import logoX from './assets/NativeLogo.png';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

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

  const handlePress = () => {
    alert('Botão pressionado!');
  };

  const addItem = () => {
    if (text.trim() !== '') {
      setItems([...items, { id: Date.now().toString(), name: text }]);
      setText('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <Image source={logoX} style={styles.image} />
        <Text style={styles.image}></Text>
      </View>

      <TextInput
        style={styles.TextInput}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Clique Aqui" onPress={handlePress} />

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.TouchableOpacity}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.TouchableOpacity} onPress={addItem}>
        <Text style={styles.TouchableOpacityText}>Toque aqui</Text>
      </TouchableOpacity>

      <SectionList
        sections={sections}
        renderItem={({ item }) => <text>(item.name)</text>}
        renderSectionHeader={({ section: { title } }) => (
          <text style={styles.sectionHeader}>{title}</text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  TouchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  TouchableOpacityText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
