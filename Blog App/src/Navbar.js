import React from 'react'

const Navbar=() => {
    return (
        <nav className='navbar'>
            <h1>Kagami Blog</h1>
            <div className='links'>
                <a href='/'>Home</a>
                <span>
                <a href='/create' style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>New blog</a>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
