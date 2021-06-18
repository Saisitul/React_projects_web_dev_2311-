import React from 'react'
import { Link } from 'react-router-dom'

const Notfound=()=> {
    return (
        <div className="Not-found">
            <h1>Sorry</h1>
            <p>The page doesn't exist</p>
            <Link to='/'>Go back to login page</Link>  
        </div>
    )
}

export default Notfound
