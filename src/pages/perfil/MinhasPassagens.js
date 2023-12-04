import { Link } from 'react-router-dom';
import Header from '../../components/perfil/Header';
import Menu from '../../components/perfil/Menu';

export default function MinhasPassagens() {
    return (
        <>
            <Header />

            <div className="grid-layout">

                <Menu />

                {/* PRINCIPAL */}
                <main>
                    <h2 className="text-center mt-3 mb-3">Minhas Passagens</h2>

                    <div className="container mb-5">
                        <div id="table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nº Pedido</th>
                                        {/*	<th scope="col">Destino</th>*/}
                                        <th scope="col">Preço</th>
                                        <th scope="col">Forma de pagamento</th>
                                        <th scope="col">Data Pedido</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Detalhes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr each="pedidos : ${pedidos}">
                                        <th scope="row" text="${pedidos.idPedido}" />
                                        <td>R$ <span text="${pedidos.precoTotal}"> </span> </td>
                                        <td text="${pedidos.formaPagamento}" />
                                        <td text="${pedidos.dataPedido}" />
                                        <td text="${pedidos.status}" />
                                        <td>
                                            <Link to="{/detalhesPassagem/{idPedido} (idPedido=${pedidos.idPedido})}" className="btn btn-warning">
                                                Exibir
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
                {/* PRINCIPAL */}

            </div>
        </>
    )
}