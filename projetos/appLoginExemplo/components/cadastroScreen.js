import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    Platform,
    BackHandler,
} from 'react-native';

export default class App3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            endereco: '',
            cidade: '',
            cep: '',
            telefone: ''
        }
        console.log('CadastroScreen: constructor')
    }

    componentDidMount() {
        console.log('CadastroScreen: componentDidMount');
    }

    componentWillUnmount() {
        console.log('CadastroScreen: componentWillUnmount');
    }

    imprimirDados = () => {
        const { nome, endereco, cidade, cep, telefone } = this.state;
        const { username, password } = this.props;
        Alert.alert( // Corrigido "alert.alert" para "Alert.alert"
            'Dados do Cadastro',
            `Usuário: ${username} \nSenha: ${password} \nNome: ${nome} \nEndereço: ${endereco}
            \nCidade: ${cidade} \nCEP: ${cep} \nTelefone: ${telefone}`,
            [{ text: 'OK' }]
        );
    };

    render() {
        console.log('CadastroScreen: render');
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    onChangeText={(nome) => this.setState({ nome })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Endereço"
                    onChangeText={(endereco) => this.setState({ endereco })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Cidade"
                    onChangeText={(cidade) => this.setState({ cidade })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="CEP"
                    onChangeText={(cep) => this.setState({ cep })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    onChangeText={(telefone) => this.setState({ telefone })}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Imprimir" onPress={this.imprimirDados} />
                    <Button title="Voltar" onPress={() => this.props.onVoltar()} />
                    <Button
                        title="Sair"
                        onPress={() => {
                            if (Platform.OS === 'android') {
                                BackHandler.exitApp();
                            } else {
                                Alert.alert('Sair', 'Para sair, feche o app manualmente.');
                            }
                        }}
                    />
                </View>
            </View>
        )
    }
}