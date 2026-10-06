import { Link } from 'react-router'
import carsInDealer from '../../assets/images/cars-in-dealer.webp'
import carInspection from '../../assets/images/car-inspection.webp'
import './AboutPage.css'
import { principles } from '../../data/principles'
import CountUp from '../../components/CountUp/CountUp'

function AboutPage() {
    return(
        <main className='AboutPage'>
            <section className='AboutHero AboutSection' aria-labelledby='about-title'>
                <div className='AboutContainer AboutHeroContent'>
                    <div className='AboutHeroText'>
                        <p className='AboutLabel AboutLabelLine'>Про Авеню Авто</p>
                        <h1 id='about-title'>Автомобілі, які обирають <em>з упевненістю</em></h1>
                        <p className='AboutDescription'>Ми створили автосалон, у якому купівля авто стає зрозумілою та спокійною. Без прихованих фактів, поспіху й компромісів у якості.</p>
                        <Link className='AboutButton' to='/'>Переглянути автомобілі</Link>
                    </div>
                    <div className='AboutPhoto'>
                        <img src={carsInDealer} alt='Автомобілі в салоні Авеню Авто' fetchPriority='high' />
                        <div className='AboutExperience'>
                            <strong>7 років</strong>
                            <span>досвіду на автомобільному ринку</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='AboutSection' aria-labelledby='about-history-title'>
                <div className='AboutContainer AboutHistory'>
                    <div>
                        <p className='AboutLabel'>Наша історія</p>
                        <h2 id='about-history-title'>Від любові до авто —<br /> до сервісу, якому <em>довіряють</em></h2>
                    </div>
                    <div className='AboutHistoryText'>
                        <p>Авеню Авто почалося у 2018 році з невеликої команди автомобільних експертів. Ми бачили, наскільки складним може бути пошук авто з пробігом, і вирішили змінити цей досвід.</p>
                        <p>Сьогодні ми самостійно відбираємо кожен автомобіль, перевіряємо його за 120 пунктами та чесно розповідаємо про стан. Наше завдання — не просто продати машину, а допомогти знайти ту, з якою вам буде добре щодня.</p>
                        <dl className='AboutStats'>
                            <div>
                                <dt>
                                    <CountUp end={850} suffix='+' />
                                </dt>
                                <dd>авто продано</dd>
                            </div>
                            <div>
                                <dt>
                                    <CountUp end={96} suffix='%' />
                                </dt>
                                <dd>рекомендують нас</dd>
                            </div>
                            <div>
                                <dt>
                                    <CountUp end={120} />
                                </dt>
                                <dd>пунктів перевірки</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
            <section className='AboutSection AboutPrinciples' aria-labelledby='about-principles-title'>
                <div className='AboutContainer'>
                    <div className='AboutPrinciplesHeading'>
                        <div>
                            <p className='AboutLabel'>Що для нас важливо</p>
                            <h2 id='about-principles-title'>Наші принципи</h2>
                        </div>
                        <p>Три прості правила, за якими ми працюємо з кожним автомобілем і кожним клієнтом.</p>
                    </div>
                    <div className='AboutPrinciplesList'>
                        {principles.map(({ title, description }, index) => (
                            <article className='AboutPrinciple' key={title}>
                                <span className='AboutPrincipleNumber'>0{index + 1}</span>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className='AboutSection' aria-labelledby='about-standard-title'>
                <div className='AboutContainer'>
                    <div className='AboutStandard'>
                        <img src={carInspection} alt='Автомобілі в залі для огляду' loading='lazy' />
                        <div className='AboutStandardText'>
                            <p className='AboutLabel'>Наш стандарт</p>
                            <h2 id='about-standard-title'>Ми знаємо історію кожного авто в нашій залі</h2>
                            <ul>
                                <li>Технічна діагностика за 120 пунктами</li>
                                <li>Перевірка юридичної та сервісної історії</li>
                                <li>Гарантія та підтримка після покупки</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutPage
