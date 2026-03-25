import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="app-nav">
      <h1>GameTracker</h1>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          My Games
        </NavLink>
        <NavLink to="/add" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          Add Game
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
