import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ loginWithRedirect, logout, isAuthenticated }) {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)

  const handleNavList = () => {
    setToggle(!toggle)
  }
  return (
    <div className="navbar_">
      <nav style={{ background: isAuthenticated ? 'tomato' : 'orange' }}>
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
          {isAuthenticated ? (
            <li>
              <Link onClick={logout} to="">
                Log Out
              </Link>
            </li>
          ) : (
            <li>
              <Link onClick={loginWithRedirect} to="">
                Sign Up
              </Link>
            </li>
          )}
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
            {isAuthenticated ? (
              <li>
                <Link onClick={logout} to="">
                  Log Out
                </Link>
              </li>
            ) : (
              <li>
                <Link onClick={loginWithRedirect} to="">
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
