import { Link, Outlet } from "react-router-dom";
import { Button } from "../../components/Button";

import './style.css';

export function Home() {

  return (
    <div className="home-container">
      <div className="img-background">

      </div>

      <div className="text-container">
        <div className="title">
          <h1>Pick up</h1>
          <p>Tome decisões sem sair de casa</p>
        </div>

        <div className="links-container">
          <Link to="/election" className='link'> 
            <Button title="Criar nova Eleição" />
          </Link> 

          <Link to="/signIn" className='link'> 
            <Button title="Votar" />
          </Link>
        </div>
      </div>
    </div>
  )
}
