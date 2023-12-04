// FUNÇÃO DE SCROLL
import ScrollToTop from '../components/ScrollToTop';

export default function QuemSomos() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Quem somos | Decole Já Viagens';

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-3 mb-3">
                        <h4 className="text-primary"> A Empresa </h4>
                        <p className="p_justify"> A <strong> Decole Já Viagens </strong> faz tudo por uma boa viagem. Por isso trabalha
                            para transformar
                            essa experiência na melhor conquista de sua vida, através de novas tendências e ampla rede de
                            produtos e serviços turísticos. É essa forma de pensar que estabelece a <strong> Decole Já Viagens
                            </strong> como a maior
                            operadora de turismo da América Latina. </p>
                        <p className="p_justify">
                            O comprometimento social, a solidez e a inovação propiciaram notoriedade e visibilidade junto ao
                            público. A <strong> Decole Já Viagens </strong> foi a primeira companhia a fretar aviões, a investir em
                            um novo canal de distribuição
                            com rede multimarca de produtos turísticos, a desenvolver o conceito de atendimento em shoppings e
                            hipermercados, além de oferecer o parcelamento de viagens em 10 vezes sem juros e valores que cabem
                            no bolso do consumidor.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3 mb-3">
                        <h4 className="text-primary"> Um passo à frente da concocorência </h4>
                        <p className="p_justify"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatum,
                            provident nulla vel laboriosam facere explicabo necessitatibus quaerat, impedit odit culpa omnis
                            quasi perferendis esse ut harum repudiandae nam rem?. </p>
                        <p className="p_justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque totam illo officiis esse.
                            Ratione repellat facilis debitis laudantium quaerat, itaque incidunt quod beatae, maiores, hic aut
                            doloribus. Distinctio, aut.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3 mb-5">
                        <h4 className="text-primary"> Conquistas </h4>
                        <p className="p_justify"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio voluptatum,
                            provident nulla vel laboriosam facere explicabo necessitatibus quaerat, impedit odit culpa omnis
                            quasi perferendis esse ut harum repudiandae nam rem?. </p>
                        <p className="p_justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque totam illo officiis esse.
                            Ratione repellat facilis debitis laudantium quaerat, itaque incidunt quod beatae, maiores, hic aut
                            doloribus. Distinctio, aut.
                        </p>
                    </div>
                </div>
            </div>


            {/* ICON SCROLL TOP */}
            <i onClick={ScrollToTop} className="ri-arrow-up-s-line" id="icon-top" />
            {/* ICON SCROLL TOP */}
        </>
    )
}