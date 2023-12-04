import { Link } from 'react-router-dom';

// COMPONENTES
import Header from '../../components/perfil/Header';
import Menu from '../../components/perfil/Menu';
import BuscarPassagem from '../../components/BuscarPassagem';

export default function ComprarPassagem() {
    return (
        <>
            <Header />

            <div className="grid-layout">

                <Menu />

                {/* PRINCIPAL */}
                <main>

                    <h2 className="text-center mt-3 mb-3">Comprar Passagem</h2>

                    {/* INÍCIO - BUSCAR PASSAGENS */}
                    <BuscarPassagem />       
                    {/* FIM BUSCAR PASSAGENS */}


                    {/* INÍCIO LISTA DE PASSAGENS */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="mt-5 mb-3 text-success">PASSAGENS DISPONÍVEIS</h3>
                        </div>
                        <div className="col-12">
                            <div id="table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Embarque</th>
                                            <th scope="col">Destino</th>
                                            <th scope="col">Data Ida</th>
                                            <th scope="col">Data Volta</th>
                                            <th scope="col">Preço</th>
                                            <th scope="col">Condição</th>
                                            <th scope="col">Qtd Disponível</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr each="destinos : ${destinos}">
                                            <th scope="row" text="${destinos.id}" />
                                            <td className="text-danger" text="${destinos.embarque}" />
                                            <td className="text-success" text="${destinos.destino}" />
                                            <td> <input type="date" value="${destinos.dataIda}" disabled /> </td>
                                            <td> <input className="dataVolta" type="date" value="${destinos.dataVolta}" disabled />
                                            </td>
                                            <td text="${destinos.preco}" />
                                            <td className="text-danger" text="${destinos.condicao}" />
                                            <td text="${destinos.quantidade}" />
                                            <td text="${destinos.categoria}" />
                                            <td>
                                                <Link to="{/{id}/realizarPedido (id=${destinos.id})}" className="btn btn-success">
                                                    Comprar
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* FIM PASSAGENS */}
                </main>
                {/* PRINCIPAL */}



            </div>
        </>
    )
}