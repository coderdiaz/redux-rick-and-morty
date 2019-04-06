import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="">Home</NavLink>
          </li>
          <li>
            <NavLink to="/example" activeClassName="">Example</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu