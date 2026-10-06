import './Header.css'
import Logo from '../Logo/Logo'
import favourite from "../../assets/icons/favorite.svg"
import telephone from "../../assets/icons/telephone.svg"
import { NavLink } from 'react-router'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <div className="header__nav-container">
          <ul className="header__nav">
            <li className="header__nav-item">
              <NavLink to="/" end>
                Автомобілі
              </NavLink>
            </li>

            <li className="header__nav-item">
              <NavLink to="/About">
                Про нас
              </NavLink>
            </li>

            <li className="header__nav-item">
              <NavLink to="/Services">Послуги</NavLink>
            </li>

            <li className="header__nav-item">
              <NavLink to="/Contacts">Контакти</NavLink>
            </li>
          </ul>
        </div>
        <div className="header__contact">
          <span className="header__phone">
            <img src={telephone} alt="Phone" />
            <span className="header__phone-number">+38 (067) 123-45-67</span>
          </span>
          <span className="favorite-icon">
            <img src={favourite} alt="Favorite" />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header