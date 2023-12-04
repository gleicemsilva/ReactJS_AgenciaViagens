// FUNÇÃO DE SCROLL
import ScrollToTop from '../components/ScrollToTop';

export default function TermosCondicoes() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Termos e Condições | Decole Já Viagens';

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12 text-alinhado">
                        <p className="text-padrao"> <strong> TERMOS E CONDIÇÕES GERAIS DE USO </strong> </p>
                        <p>
                            O presente documento de Termos e Condições Gerais de Uso do Site refere-se ao uso dos serviços
                            oferecidos pela Decole Já Viagens, por meio do presente site.
                        </p>
                        <p> É IMPERATIVO QUE TODO USUÁRIO, SEJA PESSOA FÍSICA OU JURÍDICA, QUE TENHA INTENÇÃO DE UTILIZAR OS
                            SERVIÇOS DA DECOLE JÁ VIAGENS, ACEITE ESTES TERMOS E CONDIÇÕES GERAIS DE USO DO SITE E TODAS AS DEMAIS
                            POLÍTICAS E PRÁTICAS QUE O REGEM.
                        </p>
                        <p>
                            Antes de realizar cadastro em nosso website, o usuário deve ler atenciosamente e certificar-se de
                            haver compreendido e aceito todas as condições estabelecidas nos Termos e Condições Gerais de Uso do
                            Site, Políticas de Privacidade e demais documentos incorporados aos mesmos por referência.
                        </p>
                        <p className="text-padrao mt-4"> <strong> 01) Objeto </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio perferendis quae nesciunt
                            perspiciatis eaque facilis, ex nam expedita vel pariatur natus? Itaque quis vitae beatae vero,
                            asperiores tempora? Odit, eligendi?
                        </p>
                        <p className="text-padrao mt-4"> <strong> 02) Capacidade para registrar-se </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio perferendis quae nesciunt
                            perspiciatis eaque facilis, ex nam expedita vel pariatur natus? Itaque quis vitae beatae vero,
                            asperiores tempora? Odit, eligendi?
                        </p>
                        <p className="text-padrao mt-4"> <strong> 03) Cadastro </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio perferendis quae nesciunt
                            perspiciatis eaque facilis, ex nam expedita vel pariatur natus? Itaque quis vitae beatae vero,
                            asperiores tempora? Odit, eligendi?
                        </p>
                        <p className="text-padrao mt-4"> <strong> 04) Modificações dos Termos e Condições Gerais de Uso do Site
                        </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio perferendis quae nesciunt
                            perspiciatis eaque facilis, ex nam expedita vel pariatur natus? Itaque quis vitae beatae vero,
                            asperiores tempora? Odit, eligendi?
                        </p>
                        <p className="text-padrao mt-4"> <strong> 05) Privacidade da informação </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio perferendis quae nesciunt
                            perspiciatis eaque facilis, ex nam expedita vel pariatur natus? Itaque quis vitae beatae vero,
                            asperiores tempora? Odit, eligendi?
                        </p>
                        <p className="text-padrao mt-4"> <strong> 06) Obrigações </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                        <p> <strong> 6.1 - Obrigações do usuário </strong></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consectetur iure odit saepe veniam
                            maiores, veritatis perferendis eaque voluptatum nam. Officiis maxime cupiditate ullam non, voluptas
                            repudiandae officia rerum veritatis.</p>
                        <p> <strong>6.2 - Obrigações da 123Milhas </strong></p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In perferendis natus quod consequatur iure
                        autem, repudiandae temporibus quis molestiae. Harum sint, maiores ratione obcaecati reprehenderit atque
                        sed in rem fugiat.
                        <p className="text-padrao mt-4"> <strong>
                            07) Violação no sistema ou na base de dados </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                        <p className="text-padrao mt-4"> <strong>
                            08) Sanções </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                        <p className="text-padrao mt-4"> <strong>
                            09) Responsabilidades </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                        <p className="text-padrao mt-4"> <strong>
                            10) Falhas no sistema </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                        <p className="text-padrao mt-4"> <strong>
                            11) Propriedade intelectual e links </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                        <p className="text-padrao mt-4"> <strong>
                            12) Indenização </strong> </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                        <p className="text-padrao mt-4"> <strong>
                            13) Legislação aplicável e foro de eleição </strong> </p>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugit odit fugiat porro. Quos, exercitationem? 
                        Dicta, aperiam doloribus reiciendis eaque id cumque quo commodi sit? Nemo blanditiis omnis rem voluptatem?
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