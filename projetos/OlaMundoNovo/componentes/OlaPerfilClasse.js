import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OlaPerfilClasse extends React.Component {
  render() {
    return (
      <view>
        <text>Olá Mundo! Classe</text>
        <br />
        <text>Nome: {this.props.nome}</text>
        <br />
        <text>Endereço: {this.props.endereco}</text>
        <br />
        <text>Telefone: {this.props.telefone}</text>
      </view>
    );
  }
}
