import { Link } from 'react-router-dom';
// import styles from './Menu.modules.css';

export default function Menu() {
    return (
        <>
            {/* MENU -- >*/}
            < nav >
                <ul>
                    <Link to="/perfil">
                        <span className="material-symbols-outlined"> home </span>
                        <li>Início </li>
                    </Link>
                    <Link to="/minhasPassagens">
                        <span className="material-symbols-outlined"> flight </span>
                        <li>Minhas Passagens </li>
                    </Link>
                    <Link to="/comprarPassagem">
                        <span className="material-symbols-outlined">
                            shopping_cart_checkout
                        </span>
                        <li className="viagens">Comprar passagem</li>
                    </Link>
                    <Link to="/infoCadastrais">
                        <span className="material-symbols-outlined">
                            info
                        </span>
                        <li>Info. Cadastrais</li>
                    </Link>
                    <Link to="/excluirConta">
                        <span className="material-symbols-outlined">
                            cancel </span>
                        <li>Excluir minha conta</li>
                    </Link>
                </ul>
            </nav >
            {/*FIM MENU-- >
*/}
        </>
    )
}