import { Link } from "react-router-dom";

// FUNÇÃO DE SCROLL
import ScrollToTop from '../components/ScrollToTop';

export default function Login() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Login | Decole Já Viagens';

    return (
        <>

            {/* ÁREA LOGIN */}
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-6">
                        <img className="img_login img-fluid" src="https://img.freepik.com/free-vector/tiny-man-buying-ticket-online-via-laptop-monitor-plane-baggage-flat-vector-illustration-travelling-digital-technology_74855-8621.jpg?w=740&t=st=1656546362~exp=1656546962~hmac=21772148eee30138a03402a80befb34beb3239d839b7e4dd85ed0eb3ac12e8b7" alt="Imagem login" />
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between">
                            <h3 className="text-login">Login</h3>
                            <span>ou</span>
                            <Link to='/cadastrarUsuario'>
                                <h3 className="text-registrar btn">
                                    Cadastre-se
                                </h3>
                            </Link>
                        </div>
                        <form action method>
                            <div className="row mb-2 mt-2">
                                <input type="email" className="form-control" name="email" id="email_login" aria-describedby="helpId" placeholder="Digite seu e-mail (nome@dominio.com)" maxLength={40} required />
                            </div>
                            <div className="row">
                                <input type="password" className="form-control" name="senha" id="senha_login" aria-describedby="helpId" placeholder="Digite sua senha (máx 12 digitos)" maxLength={12} required />
                            </div>
                            <div className="row mt-2">
                                <div>
                                    <input type="checkbox" name="lembrar" id="lembrar_login" /> <span>Lembre-me</span>
                                </div>
                                <div>
                                    <a className="link_rodape" href> Esqueci minha senha </a>
                                </div>
                            </div>
                            <div className="row">
                                <button className="botao_login" type="submit"> Entrar </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* FIM ÁREA LOGIN */}


            {/* ICON SCROLL TOP */}
            <i onClick={ScrollToTop} className="ri-arrow-up-s-line" id="icon-top" />
            {/* ICON SCROLL TOP */}

        </>
    )
}