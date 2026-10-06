import './SearchBar.css'
import searchIcon from "../../assets/icons/search.svg"
import keyboard_arrow_down from "../../assets/icons/chevron-down.svg"
import { cars } from '../../data/cars'

function SearchBar({ search, brand, onSearchChange, onBrandChange }) {
    const brands = [...new Set(cars.map((car) => car.brand))]

    return (
        <div className='SearchBar'>
            <label className='Input'>
                <img src={searchIcon} alt='Пошук' />
                <input type='text' placeholder="Пошук за маркою або моделлю" value={search} onChange={(event) => onSearchChange(event.target.value)} />
            </label>
            <label className='SelectBar'>
                <select value={brand} onChange={(event) => onBrandChange(event.target.value)}>
                    <option value="all">Всі бренди</option>

                    {brands.map((brand) => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
                <img src={keyboard_arrow_down} alt='keyboard_arrow_down'></img>
            </label>
        </div>
    )
}

export default SearchBar