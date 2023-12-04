export default function BuscarPassagem() {
    return (
        <>
            {/* INÍCIO - BUSCAR PASSAGENS */}
            <div className="container-fluid bg-degrade">
                <div className="container">
                    <form action="" method="">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="mt-3 text-light text-justify"> BUSCAR PASSAGENS </h3>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="text-light form-label" htmlFor="saida">De onde você está saindo? <strong>(embarque)</strong></label>
                                <input type="text" className="form-control" name="embarque" id="saida" placeholder="Informe o ponto de partida" required />
                            </div>
                            <div className="col-md-6">
                                <label className="text-light form-label" htmlFor="destino">Para onde você vai? <strong>(destino)</strong></label>
                                <input type="text" className="form-control" name="destino" id="destino" placeholder="Informe o destino" required />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 mt-3 mb-3 text-justify">
                                <button className="btn bg-buscar"> BUSCAR PASSAGENS </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
            {/* FIM BUSCAR PASSAGENS */}

        </>
    )
}