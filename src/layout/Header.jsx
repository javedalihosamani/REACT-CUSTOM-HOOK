import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <NavLink to={`/`} className='navbar-brand'>CUSTOM HOOKS</NavLink>

            <button type="button" className="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to={`/toggle`}  className={({isActive})=> (isActive ? 'active nav-link' : 'inactive nav-link')}>Toggle</NavLink>
                    </li>                
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header