import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=> {
    return (
        <nav className="navbar">
            <h1>Midoria Blogs</h1>
            <br />
            <Link to='/'>Login</Link>
            <Link to='/Register'>Register</Link>  
        </nav>
    )
}

export default Navbar
