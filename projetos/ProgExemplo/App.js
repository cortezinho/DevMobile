// Importa os componentes essenciais do React Native
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

// Componente principal do aplicativo
 export default function App() {
// Estado para armazenar o texto digitado pelo usuário
const [text, setText] = useState('');

return (
// ScrollView permite rolagem quando o conteúdo excede a tela
<ScrollView style={styles.container}>

{/* View é um contêiner básico para organizar outros elementos */}
<View style={styles.header}>
<Text style={styles.title}>Meu App Expo</Text>
</View>

{/* Exibe uma imagem */}
<Image
source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
style={styles.image}
/>

{/* Campo de entrada de texto */}
<TextInput
style={styles.input}
placeholder="Digite algo ... "
value={text}
onChangeText={setText} // Atualiza o estado conforme o usuário digita
/>

{/* Exibe o texto digitado pelo usuário */}
<Text style={styles.textOutput}>Você digitou: {text}</Text>

{/* Botão interativo*/}
<Button title="Pessione-me" onPress={() => alert('Botão pressionado!')} />
  </ScrollView>
);
}
// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
  flex: 1, // Faz com que o container ocupe toda a tela
  padding: 20,
  backgroundColor: '#f5f5f5',
  },
 
  header: {
  backgroundColor: '#6200ea',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  },
 
  title: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
  },
 
  image: {
  width: 100,
  height: 100,
  alignSelf: 'center',
  marginVertical: 20,
  },
 
  input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  paddingHorizontal: 10,
  borderRadius: 5,
  backgroundColor: 'white',
  },
  textOutput: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  });