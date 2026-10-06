import favourite_dark from "../../assets/icons/favorite-dark.svg"
import keyboard_arrow_right from "../../assets/icons/chevron-right.svg"
import './CarCard.css'

function CarCard({ car }){
    return(
        <div className='CarCard'>
            <div className='CardHeader'>
                <img className='CarImage' src={car.images[0]} alt={`${car.brand} ${car.model}`} />
                {car.isNew && <span className='CardBadge'>Новинка</span>}
                <button className='LikeButton' type='button' aria-label='Додати в обране'>
                    <img src={favourite_dark} alt='' />
                </button>
            </div>
            <div className='CardContent'>
                <div className='CardTitleRow'>
                    <p className='CarBrand'>{car.brand}</p>
                    <p className='CarYear'>{car.year}</p>
                </div>
                <h2 className='CarModel'>{car.model}</h2>

                <div className='CarSpecs'>
                    <div className='CarSpec'>
                        <span>Пробіг</span>
                        <strong>{car.mileage.toLocaleString('uk-UA')} км</strong>
                    </div>
                    <div className='CarSpec'>
                        <span>Пальне</span>
                        <strong>{car.fuel}</strong>
                    </div>
                    <div className='CarSpec'>
                        <span>Кузов</span>
                        <strong>{car.bodyType}</strong>
                    </div>
                </div>

                <div className='Price'>
                    <div>
                        <span>Ціна</span>
                        <p>{car.price.toLocaleString('uk-UA')} $</p>
                    </div>
                    <button className='OpenButton' type='button' aria-label={`Відкрити ${car.brand} ${car.model}`}>
                        <img src={keyboard_arrow_right} alt='' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarCard
