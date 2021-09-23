import React from 'react'
import { SearchBox } from './SearchBox';
import '../App.css'

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar shadow px-3 py-4">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1 text-black">CINETIME</span>
                    <SearchBox/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
