import React from 'react'

export default props => (
    <header className='main-header' >
        <a href='/#/' className='logo'style={{color: 'white'}}>
            <span className='logo-mini'><b>B</b></span>
            <span className='logo-lg' >
                <b> Broken</b>
            </span>        
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)