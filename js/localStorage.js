export function salvarItens(nomeItem) {
 
    sessionStorage.setItem('titulo', nomeItem.textContent);

    let storedTitulo = nomeItem;
    console.log(`Titulo: ${storedTitulo}`);

    return storedTitulo
}

export function removerItens(nomeItem) {
    sessionStorage.removeItem('titulo', nomeItem.textContent);
    let storedTitulo = nomeItem;

    console.log(`Titulo: ${storedTitulo}`);

    return storedTitulo

}


// Limpar todo o sessionStorage
// sessionStorage.clear();
