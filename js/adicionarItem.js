import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault()

    if (item.value === "") {
        window.alert("Por favor, insira um item!");
    } else {
        
        const itemDaLista = criarItemDaLista(item.value);
        listaDeCompras.appendChild(itemDaLista);
        verificarListaVazia(listaDeCompras);
        item.value = ""
    }

}