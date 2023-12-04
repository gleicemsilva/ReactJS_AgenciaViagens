// HORA
export default function DataHora() {

	let d = new Date(); // Para pegar a data atual

	// DATA
	let dia = d.getDate().toString().padStart(2, '0'); // Dia com 2 digitos;
	let m = String(d.getMonth() + 1).padStart(2, '0'); // Mês com 2 digitos
	let a = d.getFullYear();

	document.getElementById('data').innerText = `${dia}/${m}/${a}`;

	let hora = d.getHours(); // Pega a hora
	let min = d.getMinutes(); // Pega os minutos
	let seg = d.getSeconds(); // Pega os segundos

	// JUNTANDO h, m e s em um texto

	let txt = `${hora}h${min}:${seg}`

	// INSERINDO NA HTML - ficará visível APENAS QUANDO ACIONADA
	document.getElementById('hora').innerHTML = txt;

}

setInterval(DataHora, 1000);
