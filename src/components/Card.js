export default function Card({ img, titulo, precoInteiro, precoPromocao, }) {

    return (

                <div className="col-md-3 col-sm-6">
                    <div className="card text-center">

                        {/* IMAGEM DO CARD */}
                        <img className="card-img-top" src={img} alt="Recife" />

                        <div className="card-body">
                            <h4 className="card-title">{titulo}</h4>
                            <p className="card-text text-danger m-0 small"> De <del> R$ {precoInteiro} </del> Por </p>
                            <h4 className="card-text text-success"> {precoPromocao} </h4>

                            {/* BOTÃO GATILHO DO MODAL */}
                            <button type="button" className="btn bg-ver-mais" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Comprar passagem
                            </button>


                            {/* MODAL */}
                            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Comprar passagem</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            Para efetuar a compra realize o login.
                                        </div>
                                        <div className="modal-footer">
                                            <a href="/login">
                                                <button type="button" className="btn btn-primary">Login</button>
                                            </a>
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FIM MODAL */}

                        </div>

                    </div>
                </div>
 
    )

}