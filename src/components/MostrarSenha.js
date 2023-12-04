 // EXIBIÇÃO DE SENHA - CADASTRO DE USUÁRIO
 export default function MostrarSenha() {
    let iconEsconder = document.querySelector('#esconder');
    let iconMostrar = document.querySelector('#mostrar');

    let input = document.getElementById('senha');

    iconEsconder.addEventListener("click", showSenha);
    iconMostrar.addEventListener("click", showSenha);

    function showSenha() {

        if (input.type == "password") {
            input.type = "text";
            iconMostrar.style.display = 'none';
            iconEsconder.style.display = 'block';

        } else {
            input.type = "password";
            iconEsconder.style.display = 'none';
            iconMostrar.style.display = 'block';
        }

    }
}