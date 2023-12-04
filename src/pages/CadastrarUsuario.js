// FUNÇÃO DE SCROLL
import ScrollToTop from '../components/ScrollToTop';

// FUNÇÃO QUE MUDA O ICON (VISIBILITY/VISIBILITY_OFF) E EXIBE A SENHA
import MostrarSenha from '../components/MostrarSenha';

export default function CadastrarUsuario() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Cadastre-se | Go To Viagens';

    return (
        <>
            {/* ÁREA CADASTRO */}
            <div className="container mt-5 mb-5 bg-active">
                <form method="post" autoComplete="off">

                    <div className="row">
                        <div className="col-12">
                            <label className="mt-2" htmlFor="nome"> <strong> Nome completo: </strong> </label>
                            <input type="text" className="form-control" name="nome" id="nome" placeholder="Digite seu nome completo" maxLength={50} required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <label className="mt-2" htmlFor="cpf"> <strong> CPF: </strong> </label>
                            <input type="text" className="form-control" name="cpf" id="cpf" placeholder="Digite seu CPF (APENAS NÚMEROS)" required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <label className="mt-2" htmlFor="email"> <strong> Digite seu e-mail: </strong> </label>
                            <input type="email" className="form-control" autoComplete="on" name="email" id="email" placeholder="Digite seu e-mail (nome@dominio.com)" maxLength={40} required />
                        </div>
                    </div>

                    <div className="row">
                        <label className="mt-2" htmlFor="senha"> <strong> Senha: </strong> </label>
                        <div className="col-10">
                            <input type="password" className="form-control" name="senha" id="senha" placeholder="Digite sua senha (máx 12 digitos)" maxLength={12} required />
                        </div>

                        <div className="col-2">
                            {/* ICONS MOSTRAR/OCULTAR SENHA */}
                            <div className="icons-senha">
                                <span className="material-symbols-outlined" id="mostrar" onClick={MostrarSenha}>visibility</span>
                                <span className="material-symbols-outlined" id="esconder" onClick={MostrarSenha}>visibility_off</span>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3 p-3">
                        <button className="btn bg-cadastrar mt-3 mb-5" type="submit">Cadastrar-me</button>
                    </div>

                </form >
            </div>
            {/* FIM ÁREA LOGIN */}


            {/* ICON SCROLL TOP */}
            <i onClick={ScrollToTop} className="ri-arrow-up-s-line" id="icon-top" />
            {/* ICON SCROLL TOP */}

        </>
    )


}