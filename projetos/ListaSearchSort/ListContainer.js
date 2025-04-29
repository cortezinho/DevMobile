
import React, {useState, useMemo} from "react";

import List from "./List";

//função principal
function mapItems(items) {
    return items.map((value, i) => ({key: i.toString(), value }));
}

//cria um array
const array = new Array(100).fill(null).map((v, i) => `item ${i}`);

//função que filtra e ordena o array com base no  e se é ascendente ou não
function filterAndSort(Text, asc){
    return array
        .filter((i) => text.length ===0 || i.includes(text))
        .sort(
            asc
              ? (a,b) => (a > b ? 1 : a < b ? -1 : 0) //ordena crescente
              : (a,b) => (b > a ? 1 : b < a ? -1 : 0) //ordena decrescente
        );
}

//componente principal que gerencia o estado e a logica da lista
export default function ListContainer() {
    const [asc, setAsc] = useState(true); //estado de ordenação: crescente ou decrescente
    const [filter, setFilter] = useState("") //estado do texto de filtro

    //memoriza os dados filtrados e ordenados sempre que o filter ou asc mudam
    const data = useMemo(() => {
        return filterAndSort(filter, asc);
    }, [filter, asc]); 

    //renderiza o componente List passando os dados e funções de controle
    return(
        <List
         data = {mapItems(data)} //mapeia os dados para o formato esperado pela FlatList
         asc = {asc}
         onFilter = {(text) => {
          setFilter(text); //atualiza o filtro com o texto digitado
         }}
         onSort = {() => {
            setAsc(!asc);  //inverte a ordenação ao clicar no botão
         }}
        />
    );
}