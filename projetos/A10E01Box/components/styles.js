import { platform, StyleSheet, StatusBar} from "react native" 
import { Platform } from "react-native"

export default StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        backgroundColor: "ghostWhite",
        ...Platform.select ({
            ios: {paddingTop: 20},
            android: {paddingTop:StatusBar.currentHeight},
        }),
    },

    box: {
        width: 100,
        heigth: 100,
        justifyContent: "center",
        alignItens: "center",
        backgroundColor: "lightgray",
    },

    boxText: {
        color: "darkslategray",
        fontweight: "bold"
    }
})