import './Logo.css'
import logo from '../../assets/branding/logo.svg'
import { Link } from 'react-router'

function Logo() {
  return (
    <Link className="logo" to="/">
        <img src={logo} alt="Logo" />
        <span className="logo__title">
            <h1>АВЕНЮ</h1>
            <span className="logo__subtitle">АВТО</span>
        </span>
    </Link>
  )
}

export default Logo