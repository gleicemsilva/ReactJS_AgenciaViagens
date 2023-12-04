import logo from './img/logo.png';
import { Link } from 'react-router-dom';


export default function Navbar() {


    return (
        <div className="container-fluid mt-3">
            <header className="row">
                <div className="col-sm-6 mb-2 text-justify">
                    <Link to='/'>
                        <img src={logo} alt="Logo" height="60px" />
                    </Link>
                </div>
                <div className="col-sm-6 text-center">
                    <h5> Quer viajar? </h5>
                    <p className="small"> A Decole Já Viagens leva você aonde quiser! </p>
                </div>
            </header>

            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#" />
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse relative" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item active text-center">
                            <Link to='/' className="nav-link btn-hover bg-active"> HOME <span className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link to='/promocoes' className="nav-link btn-hover" href="html/promocoes.html">PROMOÇÕES</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link to='/destinos' className="nav-link btn-hover" href="html/destinos.html">DESTINOS</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link to='/contato' className="nav-link btn-hover" href="html/contato.html">CONTATO</Link>
                        </li>
                        <li className="nav-item text-center absolute-right">

                            <Link to='/login' className="nav-link login" href="html/login1.html">LOGAR</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )

}