/*
Selecione o input e o botão que você vai adicionar o evento para salvar o input. 
*/

const botao = document.querySelector(".botao");
const input = document.querySelector(".input");
const resposta = document.querySelector(".resposta");

/* Crie um if botao && input para que o código só execute, caso essas variáveis sejam true, ou seja, se elas estiverem na tela. */
if (botao && input) {
  /* Adicione um evento de clique e execute uma arrow function */
  botao.addEventListener("click", (e) => {
    e.preventDefault;
    /* Previnimos o padrão de botão, que atualiza a página */
    const inputValue = input.value;
    /* Criamos uma const que salve o valor do input */
    localStorage.setItem("inputValue", inputValue);
    /* Fizemos um setItem com os parâmetros inputValue = apenas um nome de referência. Após a vírgula, a const que salvamos o input.
    ou seja: setItem(Nome para salvar, valor do input)*/
  });
}

/* Colocamos um if aqui peslo mesmo motivo do de cima */
if (resposta) {
  resposta.innerText = localStorage.inputValue;
}
