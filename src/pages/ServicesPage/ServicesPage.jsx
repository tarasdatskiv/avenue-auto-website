import servicesPhoto from '../../assets/images/services-photo.webp'
import './ServicesPage.css'
import { services } from '../../data/services'

function ServicesPage() {
    return(
        <main className='ServicesPage'>
            <section className='ServicesSection ServicesHero' aria-labelledby='services-title'>
                <div className='ServicesContainer'>
                    <p className='ServicesLabel ServicesLabelLine'>Послуги Авеню Авто</p>
                    <div className='ServicesHeroContent'>
                        <h1 id='services-title'>Усе для вашого авто <em>в одному місці</em></h1>
                        <p>Від першої консультації до сервісної підтримки після покупки. Беремо складні процеси на себе, щоб ви могли зосередитися на виборі.</p>
                    </div>
                </div>
            </section>

            <section className='ServicesSection' aria-labelledby='services-list-title'>
                <div className='ServicesContainer'>
                    <div className='ServicesHeading'>
                        <div>
                            <p className='ServicesLabel'>Як ми можемо допомогти</p>
                            <h2 id='services-list-title'>Наші послуги</h2>
                        </div>
                        <p>Прозорі умови, персональний менеджер і зрозумілий результат на кожному етапі.</p>
                    </div>
                    <div className='ServicesList'>
                        {services.map(({ title, description, detail }, index) => (
                            <article className='ServiceCard' key={title}>
                                <div className='ServiceNumber' aria-hidden='true'>0{index + 1}</div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <p className='ServiceDetail'>{detail}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className='ServicesSection ServicesPersonal' aria-labelledby='services-personal-title'>
                <div className='ServicesContainer ServicesPersonalContent'>
                    <div className='ServicesPhoto'>
                        <img src={servicesPhoto} alt='Огляд автомобіля Mercedes-Benz біля автосалону' loading='lazy' />
                        <div className='ServicesBadge'>
                            <div>
                                <strong>120</strong>
                                <span>пунктів технічної перевірки</span>
                            </div>
                            <span className='ServicesCheck' aria-hidden='true'>✓</span>
                        </div>
                    </div>
                    <div className='ServicesPersonalText'>
                        <p className='ServicesLabel'>Персональний підхід</p>
                        <h2 id='services-personal-title'>Один менеджер — <em>весь шлях</em></h2>
                        <p className='ServicesDescription'>Вам не доведеться щоразу пояснювати запит заново. Персональний фахівець супроводжує вас від знайомства до передачі ключів і залишається на зв’язку після покупки.</p>
                        <ul>
                            <li>Зрозумілий план і зафіксовані умови</li>
                            <li>Регулярні оновлення на кожному етапі</li>
                            <li>Допомога з документами та оформленням</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServicesPage
