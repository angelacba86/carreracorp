// import { Link} from 'react-router-dom';
import { useState } from 'react'
import './NavBar.css'
const NavBar = ()=>{
    const [isOpen, setIsOpen]= useState(false);
    return(
        <div className='NavBar'>
        <img className='nav-logo' alt='logo' src='..\img\logo@2x.png'/>
        <div className={`nav-items ${isOpen && "open"}`}>
           <a href='#'>NOSOTROS</a> 
           <a href='#'>SERVICIOS</a>
           <a href='#'>CLIENTES</a>
           <a href='#'>GALERIA</a>
           <a href='#'>CONTACTO</a>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
          <div className='bar'></div>
        </div>
        </div>

    )
}
export default NavBar