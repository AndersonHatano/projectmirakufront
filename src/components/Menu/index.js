import React from 'react';
import Logo from '../../assets/img/Logo_Miraku.jpg'

function Menu() {
    return(
        <header>
            <nav className="Menu">
                <a href="/">
                    <img className="Logo" src={Logo} alt="Logo do Miraku"/>
                    <h1 className="TituloMenu">MIRAKU Delivery</h1>
                </a>
            </nav>
        </header>

    )

}

export default Menu;