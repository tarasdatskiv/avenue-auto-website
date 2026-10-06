import './Footer.css'
import Logo from '../Logo/Logo'
import location from '../../assets/icons/location.svg'
import telephone from '../../assets/icons/telephone.svg'
import { Link } from 'react-router'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <section className="footer__help" aria-labelledby="footer-help-title">
                    <div>
                        <p className="footer__eyebrow">Потрібна допомога?</p>
                        <h2 id="footer-help-title">Допоможемо обрати автомобіль<br className="footer__heading-break" /> саме для вас</h2>
                    </div>
                    <a className="footer__call" href="tel:+380671234567">
                        <img src={telephone} alt="" />
                        Зателефонувати
                    </a>
                </section>

                <div className="footer__columns">
                    <div className="footer__brand">
                        <Logo />
                        <p>Автомобілі з перевіреною історією, чесною ціною та гарантією від салону.</p>
                    </div>
                    <nav className="footer__nav" aria-labelledby="footer-navigation-title">
                        <h3 id="footer-navigation-title">Навігація</h3>
                        <ul>
                            <li><Link to="/">Автомобілі</Link></li>
                            <li><Link to="/About">Про нас</Link></li>
                            <li><Link to="/Services">Послуги</Link></li>
                            <li><Link to="/Contacts">Контакти</Link></li>
                        </ul>
                    </nav>
                    <nav className="footer__buyers" aria-labelledby="footer-buyers-title">
                        <h3 id="footer-buyers-title">Покупцям</h3>
                        <ul>
                            <li><a href="">Кредитування</a></li>
                            <li><a href="">Trade-in</a></li>
                            <li><a href="">Гарантія</a></li>
                            <li><a href="">Запис на огляд</a></li>
                        </ul>
                    </nav>
                    <div className="footer__contacts">
                        <h3>Наш автосалон</h3>
                        <address>
                            <ul>
                                <li><img src={location} alt="" /><span>м. Київ, вул. Автомобільна, 24</span></li>
                                <li><img src={telephone} alt="" /><a href="tel:+380671234567">+38 (067) 123-45-67</a></li>
                                <li className="footer__hours">
                                    <p>Пн–Сб: 09:00–19:00</p>
                                    <p>Нд: 10:00–17:00</p>
                                </li>
                            </ul>
                        </address>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© 2025 Авеню Авто. Усі права захищені.</p>
                    <div className="footer__legal">
                        <a href="">Політика конфіденційності</a>
                        <a href="">Умови користування</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
