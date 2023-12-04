import Card from "../components/Card";

// FUNÇÃO DE SCROLL
import ScrollToTop from '../components/ScrollToTop';

import Recife from './img/recife.jpg';
import PortoDeGalinhas from './img/portoGalinhas.jpg';
import Salvador from './img/salvador.jpeg';
import RioDeJaneiro from './img/rio.jpg';
import SaoPaulo from './img/saoPaulo.jpg';
import Londres from './img/londres.jpg';
import Paris from './img/paris.jpg';
import Lisboa from './img/lisboa.jpg';


export default function Promocoes() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Promoções | Decole Já Viagens';

    return (
        <>
            <main className="container-fluid mb-5 text-center">

                <div className="row mb-2">
                    <div className="col-12 mt-5 text-center">
                        <h2 className="mb-4 animation"> PASSAGENS COM ATÉ 50% DE DESCONTO </h2>
                    </div>
                </div>


                <div className="row">
                    <Card img={Recife} titulo={"Recife"} precoInteiro={"750,00"} precoPromocao={"350,00"} />
                    <Card img={PortoDeGalinhas} titulo={"Porto de Galinhas"} precoInteiro={"750,00"} precoPromocao={"450,00"} />
                    <Card img={Salvador} titulo={"Salvador"} precoInteiro={"800,00"} precoPromocao={"560,00"} />
                    <Card img={RioDeJaneiro} titulo={"Rio de Janeiro"} precoInteiro={"1.000,00"} precoPromocao={"759,00"} />
                </div>


                <div className="row">
                    <Card img={SaoPaulo} titulo={"São Paulo"} precoInteiro={"1.000,00"} precoPromocao={"650,00"} />
                    <Card img={Londres} titulo={"Recife"} precoInteiro={"1.500,00"} precoPromocao={"1.000,00"} />
                    <Card img={Paris} titulo={"Porto de Galinhas"} precoInteiro={"1.359,00"} precoPromocao={"815,40"} />
                    <Card img={Lisboa} titulo={"Rio de Janeiro"} precoInteiro={"1.700,00"} precoPromocao={"1.100,00"} />
                </div>


            </main>

            {/* ICON SCROLL TOP */}
            <i onClick={ScrollToTop} className="ri-arrow-up-s-line" id="icon-top" />
            {/* ICON SCROLL TOP */}

        </>

    )
}