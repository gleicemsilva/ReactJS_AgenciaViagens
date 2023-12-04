// FUNÇÃO DE SCROLL
import ScrollToTop from '../components/ScrollToTop';

import CardDescricao from "../components/CardDescricao";

import Recife from './img/recife.jpg';
import PortoDeGalinhas from './img/portoGalinhas.jpg';
import Salvador from './img/salvador.jpeg';
import RioDeJaneiro from './img/rio.jpg';
import SaoPaulo from './img/saoPaulo.jpg';
import Londres from './img/londres.jpg';
import Paris from './img/paris.jpg';
import Lisboa from './img/lisboa.jpg';

export default function Destinos() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Destinos | Decole Já Viagens';

    return (
        <>
            {/* INÍCIO DESTINOS */}
            <div className="container mb-2">

                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <h4 className="text-padrao mb-4">NACIONAIS</h4>
                    </div>
                </div>

                {/* CARDS DESTINOS NACIONAIS */}

                <CardDescricao img={Recife} nomeDestino={'RECIFE'}
                    descricao={"À beira-mar e cortada pelos rios Capibaribe e Beberibe, a capital de Pernambuco é uma das principais cidades do Nordeste, repleta de atrações culturais, atrações históricas e muita animação - lá é a terra do frevo! Com o apelido de 'Veneza Brasileira', Recife conta com uma geografia singular, com várias ilhas, canais e pontes. Seu conjunto arquitetônico impressiona, como o Espaço Cultural Pátio de São Pedro, charmoso casario oitocentista e a imponente Catedral de São Pedro dos Clérigos, que conferem ao conjunto arquitetônico da cidade traços portugueses."} />

                <CardDescricao img={PortoDeGalinhas} nomeDestino={'PORTO DE GALINHAS'}
                    descricao={"Piscinas naturais, jangadas coloridas e um mar cristalino. Esse é o cenário de Porto de Galinhas, localizada em Pernambuco, no município de Ipojuca, a 66 km da capital Recife. Um dos destinos mais badalados do Nordeste, já foi eleita como melhor destino de praia do Brasil por 10 anos consecutivos pelos leitores da revista “Viagem e Turismo” e sempre aparece nas listas das praias mais lindas do país."} />

                <CardDescricao img={Salvador} nomeDestino={'SALVADOR'}
                    descricao={"Terra de todos os santos, com muito axé, sol e mar. Essa é Salvador, que ostentou o título de capital do Brasil por mais de 200 anos. Seja nas ruas de pedra do Pelourinho, no alto do Elevador Lacerda ou nas diversas praias da cidade, a capital da Bahia encanta com seu visual histórico. E durante o Carnaval, não existe lugar no país mais animado do que esta cidade."} />

                <CardDescricao img={RioDeJaneiro} nomeDestino={'RIO DE JANEIRO'}
                    descricao={"O Rio de Janeiro tem algumas das praias mais famosas do país, que encantam tanto visitantes quanto moradores. E há opções para todos: de quem quer badalar a curtir com sossego, passando por surfistas	e famílias com crianças."} />

                <CardDescricao img={SaoPaulo} nomeDestino={'SÃO PAULO'}
                    descricao={"Uma metrópole de quase 12 milhões de habitantes que tem tudo o que você precisa: compras,gastronomia, entretenimento, moda, eventos, baladas, esportes, cultura e diversidade. Formada por muitos povos e culturas diferentes, São Paulo guarda traços de várias nacionalidades, como italianos, japoneses, alemães, árabes. A diversidade está na arquitetura, nos parques, ruas e na deliciosa culinária servida dos milhares de restaurantes. Faça parte dos mais de 13 milhões de pessoas que visitam a cidade por ano e se apaixone pela cidade que nunca dorme."}
                />

                {/* FIM CARDS DESTINOS NACIONAIS */}


                {/* CARDS DESTINOS INTERNACIONAIS */}

                <div className="row">
                    <div className="col-12 text-center">
                        <h4 className="text-danger">INTERNACIONAIS</h4>
                    </div>
                </div>

                <CardDescricao img={Londres} nomeDestino={'LONDRES'}
                    descricao={"Capital da Inglaterra, Londres é cosmopolita e vibrante. Na cidade você encontrará uma mistura de modernidade com pubs, casas de shows e restaurantes, e atrações que remetem a monarquia inglesa, como a troca de guarda, castelos e palácios. Por lá os turistas amam tirar fotos com as construções imponentes de fundo, como o Big Ben e o Palácio de Buckingham, residência da Rainha Elizabeth II. Não deixe de dar uma volta na roda-gigante London Eye. Lá do alto terá uma deslumbrante vista do rio Tâmisa e do Parlamento. Visite também a Abbey Road, conhecida como a rua dos Beatles, que virou até capa de disco."} />

                <CardDescricao img={Paris} nomeDestino={'PARIS'}
                    descricao={"Um dos destinos mais românticos do mundo, Paris atrai muitos turistas por conta de seus museus, gastronomia ímpar, monumentos importantes e por todas as histórias que cercam a capital da França. Entre os cartões-postais mais importantes que você verá estão a Torre Eiffel, o Museu do Louvre, o Arco do Triunfo e a Catedral de Notre-Dame. Aproveite também para ver espetáculos na Ópera Garnier e shows de cabarés no Moulin Rouge, além de experimentar pratos deliciosos em restaurantes consagrados."} />

                <CardDescricao img={Lisboa} nomeDestino={'LISBOA'}
                    descricao={"Explore castelos, igrejas, restaurantes típicos, praças, museus e edifícios modernos da capital lusitana. Lisboa é um destino para conhecer a história de Portugal e para conferir pontos turísticos com muita história para contar, como a Torre de Belém, o Museu dos Coches, o Mosteiro dos Jerônimos, o Oceanário, entre outros. Aproveite as vantagens de visitar um país europeu sem se preocupar com o idioma e o clima, pois a língua oficial de lá é o	português e o clima é ameno durante o ano todo."} />

                {/* FIM CARDS DESTINOS INTERNACIONAIS */}

            </div>


            {/* ICON SCROLL TOP */}
            <i onClick={ScrollToTop} className="ri-arrow-up-s-line" id="icon-top" />
            {/* ICON SCROLL TOP */}


        </>
    )
}