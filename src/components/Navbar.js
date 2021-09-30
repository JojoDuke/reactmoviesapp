import React from 'react'
import { SearchBox } from './SearchBox';
import '../App.css'
import logo from './cine.png';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar shadow-lg px-3 py-4">
                <div class="container-fluid">
                    <img src={ logo } alt="logo" class="navbar-brand mb-0 h1 text-black navv"/>
                    <SearchBox/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
