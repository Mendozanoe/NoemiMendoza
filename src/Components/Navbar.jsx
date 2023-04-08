import React from 'react'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='barra'style={{justifyContent:'space-between',
    alignItems:'center',backgroundColor:"#EDEDED "}} >
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <div>
        <h1>Odonto</h1>
      </div>
      <div>
        <Link to="/"> Home</Link>
        <Link to="/favorites"> Favorites</Link>
        <Link to="/contact"> Contact Us</Link>

        <button>Change theme</button></div>
    </nav>
  )
}

export default Navbar