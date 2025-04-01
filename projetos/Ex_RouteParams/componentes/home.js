import React from "react"
import {View, Text, Button, StatusBar} from "react-native"
import styles from "./style"
import {NativeStackScreenProps} from "@react-navigation/native-stack"

type Props = NativeStackScreenProps<RootStackParamList, "home">

export default function Home ({navigation} : Props){
    return(
        <View style = {styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <Button title="First Item" onPress={() => navigation.navigate("Details" , {title: "Firs Item"})}/>

            <Button title="Second Item" onPress={() => navigation.navigate("Details" , {title: "Second Item"})}/>

            <Button title="Third Item" onPress={() => navigation.navigate("Details" , {title: "Third Item"})}/>
        </View>
    )
}