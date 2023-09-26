import './Navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <div className="navbar">
            <h2 className='nav-brand'>React Js</h2>
            <Link className='nav-menu' to='/'>Home</Link>
            <Link className='nav-menu' to='/About'>About</Link>
            <Link className='nav-menu' to='/Contact'>Contact</Link>
        </div>
        
    )
}
/*export default fLinkunction Navbar(){
    return(
        <div className="navbar">
            <h2 className='nav-brand'>React Js</h2>
            <a className='nav-menu' href='/'>Home</a>
            <a className='nav-menu' href='/About'>About</a>
            <a className='nav-menu' href='/Contact'>Contact</a>
        </div>
        
    )
} it reloads page*/