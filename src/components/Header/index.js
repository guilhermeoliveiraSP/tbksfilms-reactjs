import './header.css';
import { Link }  from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <Link className="logo" to="/">TBKS FILMES</Link>
            <Link className="favoritos" to="/favoritos">SALVOS</Link>

        </header>
    )
}