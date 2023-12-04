// COMPONENTES
import BuscarPassagem from '../components/BuscarPassagem';
import Card from "../components/Card";

// FUNÇÃO DE SCROLL
import ScrollToTop from '../components/ScrollToTop';

// IMPORTAÇÃO DAS IMAGENS
import Recife from './img/recife.jpg';
import PortoDeGalinhas from './img/portoGalinhas.jpg';
import Salvador from './img/salvador.jpeg';
import RioDeJaneiro from './img/rio.jpg';
import SaoPaulo from './img/saoPaulo.jpg';
import Londres from './img/londres.jpg';
import Paris from './img/paris.jpg';
import Lisboa from './img/lisboa.jpg';

export default function Home() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Decole Já | Sua agência de Viagens';

    return (
        <>

            <BuscarPassagem />

            {/* INÍCIO CARDS */}
            <main className="container-fluid mb-5">

                <div className="row mb-2">
                    <div className="col-12 mt-5 text-center">
                        <h2 className="mb-4 text-padrao"> PASSAGENS NACIONAIS E INTERNACIONAIS</h2>
                    </div>
                </div>


                <div className="row">
                    <Card img={Recife} titulo={"Recife"} precoInteiro={"750,00"} precoPromocao={"500,00"} />
                    <Card img={PortoDeGalinhas} titulo={"Porto de Galinhas"} precoInteiro={"750,00"} precoPromocao={"650,00"} />
                    <Card img={Salvador} titulo={"Salvador"} precoInteiro={"800,00"} precoPromocao={"700,00"} />
                    <Card img={RioDeJaneiro} titulo={"Rio de Janeiro"} precoInteiro={"1.000,00"} precoPromocao={"889,00"} />
                </div>


                <div className="row">
                    <Card img={SaoPaulo} titulo={"São Paulo"} precoInteiro={"1.000,00"} precoPromocao={"729,00"} />
                    <Card img={Londres} titulo={"Recife"} precoInteiro={"1.500,00"} precoPromocao={"1.250,00"} />
                    <Card img={Paris} titulo={"Porto de Galinhas"} precoInteiro={"1.559,00"} precoPromocao={"1.359,00"} />
                    <Card img={Lisboa} titulo={"Rio de Janeiro"} precoInteiro={"1.700,00"} precoPromocao={"1.500,00"} />
                </div>


            </main>
            {/* FIM CARDS */}


            {/* ICON SCROLL TOP */}
            <i onClick={ScrollToTop} className="ri-arrow-up-s-line" id="icon-top" />
            {/* ICON SCROLL TOP */}

        </>

    );
}