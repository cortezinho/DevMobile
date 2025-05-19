import React, {useState, useEffect} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import { Audio } from 'expo-av';

export default function App(){
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLoop] = useState(false);

  async function loadSound(){
    console.log('Carregando Som...');
    try{
      const {sound} = await Audio.Sound.createAsync(
        require('./assets/hinopalmeiras.mp3')
      );
      setSound(sound);
      console.log('Som Carregado');
    }catch (error){
      console.log('Erro ao carregar o som:',error)
    }
  }
  async function playSound(){
    if (sound) {
      console.log('Tocando Som...');
      try{
        await sound.playAsync();
        setIsPlaying(true);
      }catch (error){
        console.error('Erro ao tocar o som:',error)
      }
    }
  }
  async function pauseSound(){
    if(sound && isPlaying){
      console.log('Pausando Som...');
      try{
        await sound.pauseAsync();
        isPlaying(false);
      }catch (error){
        console.log('Erro ao pausar o som:', error)
      }
    }
  }
  async function unloadSound() {
    if (sound){
      console.log('Descarregando Som...');
      try{
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
        setIsPlaying(false);
        console.log('Som Descarergado')
      }catch (error){
        console.log('Erro ao descarregar o som:',error)
      }
    }
  }
  async function setLooping() {
    if (sound){
      try{
        await sound.setLoopingAsync(!isLooping);
        setisLoop(!isLooping)
        console.log('Lopping:', !isLooping);
      }catch (error){
        console.log('Erro ao definir o looping:',error)
      }
    }
  }

  useEffect(() => {
    loadSound();
    return () => {
      console.log('Desmontando componente, decarregando som...');
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [])
  return(
    <View style = {Styles.container}>
      <Button title = {isPlaying ? 'Pausar som' : 'Tocar som'} onPress={isPlaying ? pauseSound : playSound} disabled = {!sound}/>
      <Button title = {isPlaying ? 'Desativar Loop' : 'Ativar Loop'} onPress={setLooping} disabled = {!sound}/><Button title = {isPlaying ? 'Desativar Loop' : 'Ativar Loop'} onPress={setLooping} disabled = {!sound}/>
      <Button title = "Descarregar som" onPress={unloadSound} disabled = {!sound}/>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});