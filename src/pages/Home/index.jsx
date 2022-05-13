import { Link, Outlet } from "react-router-dom";
import { Button } from "../../components/Button";

import './style.css';

export function Home() {
  return (
    <div>
      
      <Link to="/election" className='link'> 
        <Button title="Criar nova Eleição" />
      </Link> 

      <Link to="/" className='link'> 
        <Button title="Votar" />
      </Link>
      {/* <Outlet /> */}
    </div>
  )
}
