// FUNÇÃO DE SCROLL
import ScrollToTop from '../components/ScrollToTop';

export default function Contato() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Contato | Decole Já Viagens';

    return (
        <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12">
                        <h3 className="text-center text-padrao"> Fale conosco </h3>
                    </div>
                </div>
                
                <div className="row mt-3">
                    <form action="post">
                        <div className="col-12">
                            <div className="col-8 offset-2">
                                <input type="text" className="form-control" name="nome" id="nome_contato" aria-describedby="helpId" placeholder="Digite seu nome" maxLength={50} required />
                            </div>
                            <div className="col-8 offset-2 mt-3">
                                <input type="email" className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="Digite seu e-mail (nome@dominio.com)" maxLength={40} required />
                            </div>
                            <div className="col-8 offset-2 mt-3">
                                <textarea className="form-control size" name="mensagem" id="contato_mensagem" cols={30} rows={5} placeholder="Digite sua mensagem aqui" required defaultValue={""} />
                            </div>
                            <div className="col-8 offset-2 mt-3 mb-5">
                                <button className="botao_login" type="submit" style={{ width: '100%' }}> Enviar </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* FIM CONTATO FORM */}

            {/* INÍCIO CELL E EMAIL */}
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-md-6 ">
                        <div style={{ fontSize: 16 }}>
                            <i className="ri-phone-line"> (00) 91234-5678</i>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-inline align-middle" style={{ fontSize: 16 }}>
                            <i className="ri-mail-line align-middle"> </i>
                            <span className="align-middle"> decolejaviagens@gmail.com </span>
                        </div>
                    </div>
                </div>
            </div>


            {/* ICON SCROLL TOP */}
            <i onClick={ScrollToTop} className="ri-arrow-up-s-line" id="icon-top" />
            {/* ICON SCROLL TOP */}
        </>
    )
}