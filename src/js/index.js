/* O que precisamos fazer? - quando clicar no botão do personagem na lista, temos
que marcar o personagem como selecionado*/

// Objetivo 1 - quando clicar no botao do personagem na lista , marcar o botão como selecionado
// Passo 1 - pegar o botão no JS pra poderverificar quando o usuario clicar em cima de um deles


const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarPersonagem();

		botao.classList.add("selecionado");
		personagens[indice].classList.add("selecionado");
	});
});

function desselecionarPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado");
	personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
