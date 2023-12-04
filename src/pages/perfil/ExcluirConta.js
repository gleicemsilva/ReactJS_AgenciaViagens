import Header from '../../components/perfil/Header';
import Menu from '../../components/perfil/Menu';

import HabilitarBotao from "../../components/perfil/HabilitarBotao";

export default function excluirConta() {
    return (
        <>
            <Header />

            <div className="grid-layout">

                <Menu />

                {/* PRINCIPAL */}
                <main>
                    <h2 className="text-center mt-3 mb-3">Excluir conta</h2>
                    <p className="text-center text-primary">
                        Para excluir a sua conta <strong>marque a opção sim</strong> e
                        clique em <strong>excluir conta</strong>.
                    </p>
                    <div className="row text-center">

                        <form action="" method="">

                            <input type="hidden" name="id" className="mt-4 p-2" />

                            <div className="row" style={{ marginTop: '10rem !important' }}>
                                <div className="col-12 mb-5">
                                    <p className="text-danger">
                                        <strong>Tem certeza que deseja excluir a sua conta?</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 text-center">
                                    <label htmlFor="sim">Sim</label> <br />
                                    <input type="radio" id="sim" name="opc" defaultValue="sim" onChange={HabilitarBotao} />
                                </div>
                                <div className="col-6 text-center">
                                    <label htmlFor="nao">Não</label> <br />
                                    <input type="radio" id="nao" name="opc" defaultValue="nao" defaultChecked onChange={HabilitarBotao} />
                                </div>
                            </div>
                            <input type="submit" id="botao" className="mt-5 mb-4 bg-danger text-light p-3 btn" style={{ fontSize: '1.6rem' }} defaultValue="Excluir conta" />
                        </form>
                    </div>
                    {/* PRINCIPAL */}

                </main>

            </div>
        </>
    )
}
