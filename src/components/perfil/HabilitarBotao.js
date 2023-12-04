// PÁGINA EXCLUIR CONTA - CÓDIGO INSERIDO DIRETAMENTE NA PÁG, POIS O JSP NÃO ESTAVA RECONHECENDO POR ESTE ARQUIVO.
// CÓDIGO PARA HABILITAR/DESABILITAR O BOTÃO DE EXCLUIR CONTA

export default function HabilitarBotao() {
	
let sim = document.getElementById('sim');
let nao = document.getElementById('nao');
let btn = document.getElementById('botao');


sim.addEventListener("change", escolha);
nao.addEventListener("change", escolha);

btn.disabled = true;

function escolha() {
	if (document.querySelector("#sim").checked == true) {
		btn.disabled = false;
	} else {
		btn.disabled = true;
	}
}
}