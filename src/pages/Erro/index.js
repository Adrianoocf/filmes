import { Link } from "react-router-dom";
import './erro.css'

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h3> - Ops., página nao encontrada.</h3>
            <Link to="/" >Veja nossos filmes.</Link>
        </div>
    )
}

export default Erro;