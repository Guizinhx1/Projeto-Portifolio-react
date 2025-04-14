import { Link } from "react-router-dom"
import './Menu.css'

export const Menu = () => {
    return (
   
       <nav className="navBar">
            <Link className="link" to = '/'>Home</Link>
            <Link className="link" to = '/about' >Sobre</Link>

       </nav>
   
    )
   }