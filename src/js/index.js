const listaSelecaoCarro = document.querySelectorAll(".carro");
console.log(listaSelecaoCarro);

listaSelecaoCarro.forEach(carro => {
	carro.addEventListener("click", () => {
		esconderCartaoCarro();

		const idCarroSelecionado = mostrarCartaoCarroSelecionado(carro);

		desativarCarroNaListagem();
		ativarCarroSelecionadoNaListagem(idCarroSelecionado);

	})
})


function ativarCarroSelecionadoNaListagem(idCarroSelecionado) {
	const carroSelecionadoNaListagem = document.getElementById(idCarroSelecionado);
	carroSelecionadoNaListagem.classList.add("ativo");
}

function desativarCarroNaListagem() {
	const carroAtivoNaListagem = document.querySelector(".ativo");
	carroAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoCarroSelecionado(carro) {
	const idCarroSelecionado = carro.attributes.id.value;
	const idDoCartaoCarroParaAbrir = "cartao-" + idCarroSelecionado;
    console.log(idDoCartaoCarroParaAbrir)
	const cartaoCarroParaAbrir = document.getElementById(idDoCartaoCarroParaAbrir);
	cartaoCarroParaAbrir.classList.add("aberto");
	return idCarroSelecionado;
}

function esconderCartaoCarro() {
	const cartaoCarroAberto = document.querySelector(".aberto");
	cartaoCarroAberto.classList.remove("aberto");
}

