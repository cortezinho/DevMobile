import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OlaPerfilFuncao(props) {
  return (
    <view>
      <text>Olá Mundo! Função</text>
      <br />
      <text>Nome: {props.nome}</text>
      <br />
      <text>Endereço: {props.endereco}</text>
      <br />
      <text>Telefone: {props.telefone}</text>
    </view>
  );
}
