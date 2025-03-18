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

export default class App4 extends Component {
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