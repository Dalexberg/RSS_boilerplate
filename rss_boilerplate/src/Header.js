import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="left">
  <Link to="/" className="header-link logo">Gruppe</Link>
</div>
<nav className="right">
  <Link to="/" className="header-link">Hjem</Link>
  <span className="separator">|</span>
  <Link to="/daniel" className="header-link">Daniel</Link>
</nav>

    </header>
  )
}
