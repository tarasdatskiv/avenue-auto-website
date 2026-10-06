import { Link } from 'react-router'
import location from '../../assets/icons/location.svg'
import telephone from '../../assets/icons/telephone.svg'
import './ContactsPage.css'

function ContactsPage() {
    const sendMessage = (event) => {
        event.preventDefault()

        const form = new FormData(event.currentTarget)
        const subject = encodeURIComponent(form.get('subject'))
        const body = encodeURIComponent(`Ім’я: ${form.get('name')}\nТелефон: ${form.get('phone')}\n\n${form.get('message')}`)

        window.location.href = `mailto:hello@avenue-auto.ua?subject=${subject}&body=${body}`
    }

    return(
        <main className='ContactsPage'>
            <section className='ContactsHero ContactsSection' aria-labelledby='contacts-title'>
                <div className='ContactsContainer ContactsHeroContent'>
                    <div>
                        <p className='ContactsLabel ContactsLabelLine'>Зв’яжіться з нами</p>
                        <h1 id='contacts-title'>Ми тут, щоб <em>відповісти</em></h1>
                    </div>
                    <p>Телефонуйте, пишіть або завітайте особисто — менеджер відповість на будь-яке питання щодо авто, умов купівлі чи запису на огляд.</p>
                </div>
            </section>

            <section className='ContactsSection ContactsMain' aria-label='Контактна інформація та форма звернення'>
                <div className='ContactsContainer'>
                    <div className='ContactsCards'>
                        <div className='ContactCard'>
                            <span className='ContactIcon'><img src={location} alt='' /></span>
                            <h2>Адреса</h2>
                            <p>м. Київ, вул. Автомобільна, 24</p>
                            <span>Поруч зі ст. м. Либідська</span>
                        </div>
                        <div className='ContactCard'>
                            <span className='ContactIcon'><img src={telephone} alt='' /></span>
                            <h2>Телефон</h2>
                            <a href='tel:+380671234567'>+38 (067) 123-45-67</a>
                            <span>Дзвінки та Viber</span>
                        </div>
                        <div className='ContactCard'>
                            <span className='ContactIcon' aria-hidden='true'>
                                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
                                    <rect x='3' y='5' width='18' height='14' rx='2' />
                                    <path d='m3 6 9 7 9-7' />
                                </svg>
                            </span>
                            <h2>Email</h2>
                            <a href='mailto:hello@avenue-auto.ua'>hello@avenue-auto.ua</a>
                            <span>Відповідаємо протягом дня</span>
                        </div>
                        <div className='ContactCard'>
                            <span className='ContactIcon' aria-hidden='true'>
                                <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
                                    <circle cx='12' cy='12' r='9' />
                                    <path d='M12 6v6l4 3' />
                                </svg>
                            </span>
                            <h2>Графік роботи</h2>
                            <p>Пн–Сб: 09:00–19:00</p>
                            <span>Нд: 10:00–17:00</span>
                        </div>
                    </div>

                    <div className='ContactsLayout'>
                        <form className='ContactsForm' onSubmit={sendMessage}>
                            <p className='ContactsLabel'>Надіслати повідомлення</p>
                            <h2>Запишіться або поставте запитання</h2>
                            <div className='ContactsFormFields'>
                                <div className='ContactsFormRow'>
                                    <label>
                                        <span>Ваше ім’я</span>
                                        <input name='name' type='text' placeholder='Олексій' autoComplete='name' required />
                                    </label>
                                    <label>
                                        <span>Телефон</span>
                                        <input name='phone' type='tel' placeholder='+38 (___) ___-__-__' autoComplete='tel' required />
                                    </label>
                                </div>
                                <label>
                                    <span>Тема звернення</span>
                                    <select name='subject'>
                                        <option>Запис на огляд автомобіля</option>
                                        <option>Trade-in</option>
                                        <option>Кредитування</option>
                                        <option>Підбір авто</option>
                                        <option>Інше питання</option>
                                    </select>
                                </label>
                                <label>
                                    <span>Повідомлення</span>
                                    <textarea name='message' placeholder='Розкажіть, чим ми можемо допомогти...' rows={4} required />
                                </label>
                                <button className='ContactsButton' type='submit'>Надіслати повідомлення</button>
                            </div>
                            <p className='ContactsFormNote'>Кнопка відкриє вашу поштову програму з підготовленим повідомленням.</p>
                        </form>

                        <div className='ContactsSidebar'>
                            <iframe
                                className='ContactsMap'
                                title='Карта Google — Золочів'
                                src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1527.393960453582!2d24.89242337874408!3d49.799664450772156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDQ3JzU4LjgiTiAyNMKwNTMnMzYuNiJF!5e1!3m2!1suk!2sua!4v1790672788154!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin'
                                width='600'
                                height='450'
                                allowFullScreen
                                loading='lazy'
                                referrerPolicy='strict-origin-when-cross-origin'
                            />
                            <div className='ContactsQuick'>
                                <p className='ContactsLabel'>Швидкий зв’язок</p>
                                <h2>Зателефонуйте прямо зараз</h2>
                                <p>Менеджер відповість та проконсультує без очікування.</p>
                                <a className='ContactsButton' href='tel:+380671234567'>
                                    <img src={telephone} alt='' />
                                    +38 (067) 123-45-67
                                </a>
                                <div className='ContactsQuickEmail'>
                                    <span>Email</span>
                                    <a href='mailto:hello@avenue-auto.ua'>hello@avenue-auto.ua</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ContactsSection ContactsFaq' aria-labelledby='contacts-faq-title'>
                <div className='ContactsContainer'>
                    <div className='ContactsFaqHeading'>
                        <div>
                            <p className='ContactsLabel'>Часті запитання</p>
                            <h2 id='contacts-faq-title'>Відповіді на популярні питання</h2>
                        </div>
                        <Link className='ContactsCatalogLink' to='/'>Переглянути автомобілі</Link>
                    </div>
                    <div className='ContactsFaqList'>
                        <article className='ContactsFaqCard'>
                            <h3>Чи можна записатися на огляд авто онлайн?</h3>
                            <p>Так — заповніть форму вище або зателефонуйте. Менеджер підтвердить зручний час протягом кількох хвилин.</p>
                        </article>
                        <article className='ContactsFaqCard'>
                            <h3>Які документи потрібні для trade-in?</h3>
                            <p>Паспорт, ІПН та свідоцтво про реєстрацію. Оцінку проводимо безкоштовно у день звернення протягом 1 години.</p>
                        </article>
                        <article className='ContactsFaqCard'>
                            <h3>Чи є можливість тест-драйву?</h3>
                            <p>Так, для всіх автомобілів у наявності. Запишіться заздалегідь, щоб ми підготували авто до вашого приїзду.</p>
                        </article>
                        <article className='ContactsFaqCard'>
                            <h3>Як швидко можна оформити кредит?</h3>
                            <p>Попереднє рішення банку-партнера — від 30 хвилин. Менеджер допоможе підібрати умови без зайвої бюрократії.</p>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactsPage