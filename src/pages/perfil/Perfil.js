import Header from '../../components/perfil/Header';
import Menu from '../../components/perfil/Menu';

import Recife from '../img/recife.jpg';
import Paris from '../img/paris.jpg';
import Lisboa from '../img/lisboa.jpg';

export default function Inicio() {

    return (
        <>
            <Header />

            <div className="grid-layout">

                <Menu />

                {/* PRINCIPAL */}
                < main >
                    <div className="container mt-3 mb-3">
                        {/* INÍCIO CAROUSEL */}
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active text-center">
                                    <img src={Lisboa} className="img-fluid" alt="Lisboa" />
                                </div>
                                <div className="carousel-item text-center">
                                    <img src={Paris} className="img-fluid" alt="Paris" />
                                </div>
                                <div className="carousel-item text-center">
                                    <img src={Recife} className="img-fluid" alt="Recife" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Próximo</span>
                            </button>
                        </div>
                        {/* FIM CAROUSEL */}
                    </div>
                </main >
                {/* PRINCIPAL */}

            </div>
        </>
    )

}