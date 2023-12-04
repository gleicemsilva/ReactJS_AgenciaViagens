// FUNÇÃO DE SCROLL
import ScrollToTop from '../components/ScrollToTop';

export default function TrabalheConosco() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Trabalhe Conosco | Decole Já Viagens';

    return (
        <>
            {/* INÍCIO CONTATO FORM */}
            <div className="container mb-5">
                <div className="row mt-3">
                    <div className="col-12">
                        <h3 className="text-center text-padrao"> Trabalhe conosco </h3>
                        <p> Se você está querendo trabalhar na área que mais cresce no Brasil e no Mundo, venha fazer parte da
                            nossa equipe! </p>
                        <p> Será um prazer tê-lo(a) como colaborador!! </p>
                        <p className="text-padrao text-center"> <strong> Preencha o formulário abaixo com os seus dados: </strong>
                        </p>
                    </div>
                </div>
                <div className="row mt-3">
                    <form method="post">
                        <div className="col-12">
                            <input type="text" className="form-control" name="nome" id="nome" placeholder="Digite seu nome" maxLength={50} required />
                        </div>
                        <div className="col-12 mt-3 mb-3">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Digite seu e-mail (nome@dominio.com)" maxLength={50} required />
                        </div>
                        <div className="col-12 mt-3 mb-3">
                            <input type="text" className="form-control" name="cargo" id="cargo" placeholder="Cargo para candidatura da vaga" maxLength={15} required />
                        </div>
                        <div className="col-12 mt-3 mb-3">
                            <label className="text-padrao" htmlFor="curriculo"> <strong> Envie o seu currículo: </strong> (Envie o seu
                                currículo para o DRIVE e cole o link abaixo - não esqueça de deixar o link como público)
                            </label>
                            <br />
                            <input type="url" className="form-control" name="curriculo" id="curriculo" />
                        </div>
                        <div className="col-12 mb-3 text-center">
                            <button className="botao_login" type="submit" style={{ width: '100%' }}> Enviar </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* FIM CONTATO FORM */}


            {/* ICON SCROLL TOP */}
            <i onClick={ScrollToTop} className="ri-arrow-up-s-line" id="icon-top" />
            {/* ICON SCROLL TOP */}

        </>
    )
}