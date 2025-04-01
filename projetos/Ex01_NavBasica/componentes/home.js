import React from "react"
import {View, Text, Button, StatusBar} from "react-native"
import styles from "./styles"
import {NativeStackScreenProps} from "@react-navigation/native-stack"

type Props = NativeStackScreenProps<RootStackParamList>

export default function Home({navigation} : Props){
    return(
        <View styles = {styles.container}>
            <StatusBar barStyle = "dark-content"/>
            <Text>Home Screen</Text>
            <Button title = "Settings" onPress={() => navigation.navigate("Settings")}/>
        </View>
    )
}