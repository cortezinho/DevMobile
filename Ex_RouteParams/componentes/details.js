import React from "react"
import {View, Text, Button, StatusBar} from "react-native"
import styles from "./style"
import {NativeStackScreenProps} from "@react-navigation/native-stack"

type Props = NativeStackScreenProps<RootStackParamList, "details">

export default function ({route} : Props){
    const {title} = route.params

    return(
        <View style = {styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <Text>{title}</Text>
        </View>
    )
}