export default function CardDescricao({ img, nomeDestino, descricao }) {
    return (

        <div className="row mb-5">
            <div className="col-md-6">
                <img className="img-fluid" src={img} alt="Recife" />
            </div>
            <div className="col-md-6 text-center">
                <h6 className="text-alinhado mb-2 mt-2"> Sobre o Destino: {nomeDestino} </h6>
                <p className="text-alinhado">
                    {descricao}
                </p>
                {/* Button trigger modal */}
                <button type="button" className="btn bg-buscar" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Comprar passagem
                </button>

                {/* Modal */}
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
                {/* FIM Button trigger modal */}


            </div>
        </div>

    );
}