const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");
const lista = document.getElementById("lista-de-compras");

export function verificarListaVazia() {
    const itens = lista.querySelectorAll("li");
    if (itens.length === 0) {
        mensagemListaVazia.style.display = "block"; 
    } else {
        mensagemListaVazia.style.display = "none"; 
    }
}

const observer = new MutationObserver(mutations => {
    verificarListaVazia();
});

observer.observe(lista, { childList: true });
