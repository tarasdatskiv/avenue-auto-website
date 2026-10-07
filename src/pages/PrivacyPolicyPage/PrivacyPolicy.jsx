import { privacy_policy_data } from '../../data/privacy_policy_data'
import './PrivacyPolicy.css'

function PrivacyPolicyPage() {
    return(
        <main className='PrivacyPolicyPage'>
            <section className='PrivacyPolicySectionHero' aria-labelledby='privacy-policy-title'>
                <div className='PrivacyPolicyHeroContent'>
                    <p className='PrivacyPolicyLabel'>Захист ваших даних</p>
                    <h1 id='privacy-policy-title'>Політика конфіденційності</h1>
                    <p className='PrivacyPolicyDescription'>Ми поважаємо вашу приватність і відповідально ставимося до персональних даних, які ви передаєте Авеню Авто під час користування сайтом та нашими послугами.</p>
                    <p className='PrivacyPolicyUpdated'>Оновлено <time dateTime='2025-01-15'>15 січня 2025 року</time></p>
                </div>
            </section>
            <div className='PrivacyPolicyContent'>
                <nav className='PrivacyPolicyNavigation' aria-labelledby='privacy-policy-navigation-title'>
                    <p id='privacy-policy-navigation-title'>На цій сторінці</p>
                    <ol>
                        {privacy_policy_data.map(({ id, number, title }) => (
                            <li key={id}>
                                <a href={`#${id}`}>
                                    <span className='PrivacyPolicyNavigationNumber'>{number}</span>
                                    <span>{title}</span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>
                <div className='PrivacyPolicySections'>
                    {privacy_policy_data.map(({ id, number, title, paragraphs, list }) => (
                        <section className='PrivacyPolicySection' id={id} aria-labelledby={`${id}-title`} key={id}>
                            <div className='PrivacyPolicySectionHeading'>
                                <span className='PrivacyPolicySectionNumber'>{number}</span>
                                <h2 id={`${id}-title`}>{title}</h2>
                            </div>
                            {paragraphs.map(paragraph => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                            {list && (
                                <ul>
                                    {list.map(item => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default PrivacyPolicyPage
