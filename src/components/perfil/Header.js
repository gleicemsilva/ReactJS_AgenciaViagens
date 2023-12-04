// import styles from './Header.modules.css';
import logo from '../img/logo.png';

import DataHora from './DataHora';


export default function Header() {

    return (

        <header>
            <div className="logo">
                <img src={logo} alt="Logo Decole Já Viagens" id="logo" />
            </div>
            <div className="welcome">
                <span>Olá, <strong>NOME</strong>. Seja bem vindo(a)!</span>
                <div className="datahora">
                    <span><strong>Data:</strong> <span id="data" />. </span>
                    <span><strong>Hora:</strong> <span id="hora" />.</span>
                </div>
            </div>
            <div className="text-light d-flex align-items-center justify-content-end botao-sair">
                <button type="submit" className="material-symbols-outlined logout" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> logout </button>
            </div>
            {/* MODAL */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title text-light" id="staticBackdropLabel"><strong>Logout</strong></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body text-danger">
                            <strong>Você tem certeza que deseja sair?</strong>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary p-2" data-bs-dismiss="modal">Cancelar</button>
                            <form action="/logout" method="post">
                                <button type="submit" className="btn btn-primary p-2 ml-3 sair">Sim, quero sair.</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    )


}