import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

import './style.css'

export function SignInPage() {
  return (
    <div className="signIn-container">
       <div className="img-background">

      </div>

      <div className="text-container">
        <div className="title">
            <h1>Pick up</h1>
            <p>Tome decisões sem sair de casa</p>
        </div>

        <div className="links-container">
          <input className="link" type="text"  placeholder="Insira seu CPF aqui" />

          <Link to="/vote" className='link'> 
            <Button title="Entrar" />
          </Link>
        </div>
      </div>
    </div>
  )
}