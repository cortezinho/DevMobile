//importa os componentes Text, view w Flatlist da biblioteca React native
import { Text, View, FlatList } from "react-native";

//importa os estilos definidos no arquivo styles.js
import styles from "./styles"

const nomes = ["bruno", "gabriel", "joao", "heloisa", "cayque", "leandro", "caio"]

//cria um array com 100 elementos
//cada elemento é um objeto com uma chave (key) e um valor (value), como: {key: "0", value: "Item 0"}
const data = new Array(100)
  .fill(null) //preenche o array com valores nulos inicialmente
  .map((v, i) => ({
    key: i.toString(),
    value: nomes[Math.floor(Math.random() * nomes.length)]
    }));

//função principa do aplicativo
export default function App(){
  return(
    //container principal com estilo aplicado
    <View style={styles.container}>
      <FlatList data={data}
       renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>}/>
    </View>
  )
}