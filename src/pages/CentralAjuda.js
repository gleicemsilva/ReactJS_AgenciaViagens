// FUNÇÃO DE SCROLL
import ScrollToTop from '../components/ScrollToTop';

export default function CentralAjuda() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Central de Ajuda | Go To Viagens';

    return (
        <>
            {/* INÍCIO CENTRAL DE AJUDA */}
            <div className="container mt-5 mb-5">
                <div className="row text-center text-padrao">
                    <div className="col-12 mb-4">
                        <h3> Como podemos te ajudar? </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <a href="/contato">
                            <div className="card btn bg-central-ajuda">
                                <div className="icon mt-2" style={{ fontSize: 24 }}>
                                    <i className="ri-file-list-line" />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title mb-3"> Quero preencher um formulário rápido</h6>
                                    <p className="card-text small"> Receba <strong> retorno ágil de um atendente </strong> pelo
                                        seu e-mail.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 mb-3">
                        <a href="https://api.whatsapp.com/send?phone=5500912345678&text=" target="_blank">
                            <div className="card text-center btn bg-central-ajuda">
                                <div className="icon mt-2" style={{ fontSize: 24 }}>
                                    <i className="ri-whatsapp-line" />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title mb-3"> Quero obter informações por WhatsApp</h6>
                                    <p className="card-text small"> Tire dúvidas em nosso sistema e fale com um atendente.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card text-center btn bg-central-ajuda">
                            <div className="icon mt-2" style={{ fontSize: 24 }}>
                                <i className="ri-phone-line" />
                            </div>
                            <div className="card-body">
                                <h6 className="card-title mb-3">Canal telefônico informativo </h6>
                                <p className="card-text small"> Ouça informações automatizadas sobre os nossos procedimentos.
                                </p>
                                <p>Entre em contato pela central de atendimento:</p>
                                <p> <strong> 0800 123 4567 </strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FIM CENTRAL DE AJUDA */}


            {/* ICON SCROLL TOP */}
            <i onClick={ScrollToTop} className="ri-arrow-up-s-line" id="icon-top" />
            {/* ICON SCROLL TOP */}

        </>

    )
}