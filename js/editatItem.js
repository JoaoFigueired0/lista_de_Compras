export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");
    
    if(novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem
    
        const estavaComprado = elemento.querySelector(".input-checkbox").checked;
           
        if (condition) {
            elemento.querrySelector("input-checkbox").checked = true
            elemento.querrySelector("checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";   
            itemTextoAtualizado.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
            itemTextoAtualizado.classList.add("texto-data");
        }
    }
}