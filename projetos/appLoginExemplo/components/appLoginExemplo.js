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