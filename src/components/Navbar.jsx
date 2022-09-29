import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)

  const handleNavList = () => {
    setToggle(!toggle)
  }
  return (
    <div className="navbar">
      <nav>
        <h2 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          Compare App
        </h2>
        <ul className="nav_item_desktop">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div onClick={handleNavList} className="burger_menü">
          {!toggle ? <i class="las la-bars"></i> : <i class="las la-times"></i>}
        </div>
      </nav>
      <div className="mobile_navlist">
        {toggle ? (
          <ul className="nav_item_mobile">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  )
}
