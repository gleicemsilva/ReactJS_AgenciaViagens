import logo from './img/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (

        <footer className="container-fluid bg-light">
            <div className="row mb-3">
                <div className="col-sm-6 mb-2 text-right">
                    <Link to='/'>
                        <img src={logo} alt="logo" width="150px" />
                    </Link>
                </div>
                <div className="col-sm-6 text-justify">
                    <h5> Decole Já Viagens </h5>
                    <p className="m-0 small">CNPJ 12.345.678/0001-23</p>
                    <p className="m-0 small">Rua Marques da Silva, 0001 - HTML CSS BOOTSTRAP</p>
                    <p className="m-0 small">CCEP: 10101-010, Internet</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button bg-light text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    FORMAS DE PAGAMENTO
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body text-center">
                                    <img className="img-fluid" src="https://i0.wp.com/urucuna.com/wp-content/uploads/2021/02/bandeiras-cartoes-credito.png?ssl=1" alt="formas de pagamento" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-2">
                <div className="col-lg-2 col-sm-4 small"> <Link to='/quemsomos' className="link_rodape" href="html/quemsomos.html"> Quem somos </Link> </div>
                <div className="col-lg-2 col-sm-4 small"> <Link to='/centralajuda' className="link_rodape" href="html/centralajuda.html"> Central de ajuda </Link>
                </div>
                <div className="col-lg-2 col-sm-4 small"> <Link to='/termoscondicoes' className="link_rodape" href="html/termoscondicoes.html"> Termos e condições
                </Link> </div>
                <div className="col-lg-2 col-sm-4 small"> <Link to='/duvidas' className="link_rodape" href="html/duvidas.html"> Dúvidas </Link> </div>
                <div className="col-lg-2 col-sm-4 small"> <Link to='/contato' className="link_rodape" href="html/contato.html"> Clique para falar conosco
                </Link> </div>
                <div className="col-lg-2 col-sm-4 small"> <Link to='/trabalheconosco' className="link_rodape" href="html/trabalheconosco.html"> Trabalhe conosco
                </Link> </div>
            </div>
            <div className="row mt-4 mb-3">
                <div className="col-12 text-center"> © 2023 - Decole Já Agência de Viagens </div>
            </div>
        </footer>


    )

}