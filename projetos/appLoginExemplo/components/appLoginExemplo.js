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

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        console.log('LoginScreen: constructor');
    }

    componentDidMount() {
        console.log('LoginScreen: componentDidMount');
    }

    componentWillUnmount() {
        console.log('LoginScreen: componentWillUnmount');
    }

    render() {
        console.log('LoginScreen: render');
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="senha"
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    title="Entrar"
                    onPress={() => this.props.onLogin(this.state.username, this.state.password)} // Corrigido "udername" para "username"
                />
            </View>
        )
    }
}

class CadastroScreen extends Component {
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

export default class App2 extends Component {
    constructor(props) { // Corrigido "propx" para "props"
        super(props);
        this.state = { loggedIn: false, username: '', password: '' };
        console.log('App: constructor');
    }

    componentDidMount() { // Corrigido "componetDidMount" para "componentDidMount"
        console.log('App: componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) { // Corrigido "componetDidUpdate" para "componentDidUpdate"
        console.log('App: componentDidUpdate', prevState, this.state);
    }

    componentWillUnmount() {
        console.log('App: componentWillUnmount');
    }

    handleLogin = (username, password) => {
        this.setState({ loggedIn: true, username, password: '' });
    };

    handleVoltar = () => {
        this.setState({ loggedIn: false, username: '', password: '' });
    };

    render() {
        console.log('App: render');
        return (
            <View style={styles.container}>
                {this.state.loggedIn ? (
                    <CadastroScreen
                        onVoltar={this.handleVoltar}
                        username={this.state.username}
                        password={this.state.password}
                    />
                ) : (
                    <LoginScreen onLogin={this.handleLogin} />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10, // Corrigido "marginBotom" para "marginBottom"
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
});