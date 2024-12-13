import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { removerItens } from "./localStorage.js";


const listaDeCompras = document.getElementById("lista-de-compras")
const listaComprados = document.getElementById("lista-compras")

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item ?")

    if (confirmacao) {
        elemento.remove()
        elemento.removerItens(confirmacao)

        verificarListaVazia(listaDeCompras)
        verificarListaComprados(listaComprados)
    }
} 

export { excluirItem }