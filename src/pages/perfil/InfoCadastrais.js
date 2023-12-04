// FUNÇÃO QUE MUDA O ICON (VISIBILITY/VISIBILITY_OFF) E EXIBE A SENHA
import MostrarSenha from "../../components/MostrarSenha";

import Header from '../../components/perfil/Header';
import Menu from '../../components/perfil/Menu';

export default function infoCadastrais() {
    return (
        <>
            <Header />

            <div className="grid-layout">

                <Menu />


                {/* PRINCIPAL */}
                <main>

                    <h2 className="text-center mt-3 mb-2">Informações cadastrais</h2>
                    <p className="infoCad">Caso deseje realizar uma atualização cadastral basta alterar os dados e clicar no botão
                        "atualizar dados".</p>
                    <form action="/infoCadastrais" method="post">
                        <div className="row mt-5 mb-3">

                            <input type="hidden" name="id" />

                            <div className="col-md-2">
                                <label htmlFor="cpf">CPF:</label>
                            </div>

                            <div className="col-md-10">
                                <input className="p-2" type="text" disabled />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-2">
                                <label htmlFor="nome">NOME:</label>
                            </div>
                            <div className="col-md-10">
                                <input className="p-2" type="text" maxLength={50} name="nome" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-2">
                                <label htmlFor="email">E-MAIL:</label>
                            </div>
                            <div className="col-md-10">
                                <input className="p-2" type="text" maxLength={50} name="email" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-2">
                                <label htmlFor="telefone">TELEFONE:</label>
                            </div>
                            <div className="col-md-10">
                                <input className="p-2" type="text" name="telefone" id="telefone" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-2">
                                <label htmlFor="senha">SENHA:</label>
                            </div>
                            <div className="col-md-10">
                                <div id="exibirSenha">
                                    <input className="p-2" type="password" minLength={4} maxLength={12} name="senha" id="senha" />
                                    <span className="material-symbols-outlined" id="esconder" onClick={MostrarSenha}>visibility_off</span>
                                    <span className="material-symbols-outlined" id="mostrar" onClick={MostrarSenha}>visibility</span>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-12 text-right">
                                <div className="col-md-12 alert alert-warning text-center mt-3" role="alert">
                                    <p>Ao clicar em <strong>atualizar</strong>, todos os campos alterados serão atualizados!</p>
                                    <p>Entretanto, só será possível verificar as alterações no próximo acesso/login.</p>
                                </div>
                                <button className="mt-5 me-3 infoCad" type="submit">Atualizar dados</button>
                            </div>
                        </div>
                    </form>
                </main>

                {/* PRINCIPAL */}

            </div>
        </>
    )
}