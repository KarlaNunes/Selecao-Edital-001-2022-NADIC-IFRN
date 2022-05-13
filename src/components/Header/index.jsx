import './style.css'

import arrowImage from '../../assets/arrow.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={arrowImage} alt="" />
        </Link>
      </header> 
    </>
  )
}