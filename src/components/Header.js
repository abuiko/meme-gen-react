import React from 'react'
import { Link } from "react-router-dom"


function Header() {
    return (

        <header>
            <Link to="/findmeme" style={{ textDecoration: 'none' }}>
                <h1>Meme Generator</h1>
            </Link>

            {/* temporarily made */}
            <Link to="/start" style={{ textDecoration: 'none' }}>
                <button className="header-btn">
                    Start
                </button>
            </Link>
        </header>

    )
}

export default Header
