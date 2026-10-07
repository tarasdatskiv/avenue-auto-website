import { terms_of_use_data } from '../../data/termsofuse_data'
import './TermsOfUsePage.css'

function TermsOfUsePage() {
    return(
        <main className='TermsOfUsePage'>
            <section className='TermsOfUseSectionHero' aria-labelledby='terms-of-use-title'>
                <div className='TermsOfUseHeroContent'>
                    <p className='TermsOfUseLabel'>Правила користування сайтом</p>
                    <h1 id='terms-of-use-title'>Умови користування</h1>
                    <p className='TermsOfUseDescription'>Ці Умови визначають правила користування сайтом Авеню Авто. Будь ласка, ознайомтеся з ними перед переглядом каталогу та надсиланням заявок.</p>
                    <p className='TermsOfUseUpdated'>Оновлено <time dateTime='2025-01-15'>15 січня 2025 року</time></p>
                </div>
            </section>
            <div className='TermsOfUseContent'>
                <nav className='TermsOfUseNavigation' aria-labelledby='terms-of-use-navigation-title'>
                    <p id='terms-of-use-navigation-title'>На цій сторінці</p>
                    <ol>
                        {terms_of_use_data.map(({ id, number, title }) => (
                            <li key={id}>
                                <a href={`#${id}`}>
                                    <span className='TermsOfUseNavigationNumber'>{number}</span>
                                    <span>{title}</span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>
                <div className='TermsOfUseSections'>
                    {terms_of_use_data.map(({ id, number, title, paragraphs, list }) => (
                        <section className='TermsOfUseSection' id={id} aria-labelledby={`${id}-title`} key={id}>
                            <div className='TermsOfUseSectionHeading'>
                                <span className='TermsOfUseSectionNumber'>{number}</span>
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

export default TermsOfUsePage

