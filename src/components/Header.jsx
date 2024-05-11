import React, { useState } from 'react'

function Header() {

    const [menu, setMenu] = useState(false) 
    
    const handleClick = () =>{
        if (window.screenX <= 650) {
            setMenu(!menu)
        }
    }

    return <div id='navBar-logo' >
        <section className='logo'> 
            <span className='rap'>RAP</span><span className='hip'>HIP</span><span className='hop'>HOP</span>
        </section>
        <section className='nav'>
            <ul id='myUL' className={menu ? 'display-ul-resp' : ''}>
                <li><a href="#">Acceuil<i className="fas fa-home"></i></a></li>
                <li><a href="#">Musique<i className="fas fa-music"></i></a></li>
                <li><a href="#">Video<i className="fas fa-video"></i></a></li>
                <li><a href="#">About<i className="fas fa-info-circle"></i></a></li>
            </ul>
        </section>
        <i className='fas fa-bars' id='menu-burger' onClick={handleClick}></i>
    </div>
}

export default Header;