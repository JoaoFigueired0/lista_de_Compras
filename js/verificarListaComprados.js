const containerListaComprados = document.getElementById("container-lista-comprados");

export function verificarListaComprados(lista) {
    const itensComprados = lista.querySelectorAll("li"); // Verifica os itens 'li' dentro da lista
    
    if (itensComprados.length === 0) {
        containerListaComprados.style.display = "none"; // Esconde o container se a lista estiver vazia
    } else {
        containerListaComprados.style.display = "block"; // Mostra o container se houver itens comprados
    }
}
