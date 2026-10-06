import './Filters.css'
import location from '../../assets/icons/location.svg'
import { fuelTypes, bodyTypes } from '../../data/options'

function Filters({ filters, onFiltersChange, onReset, cars }) {
    const fuelOptions = Object.values(fuelTypes)
    const bodyTypeOptions = Object.values(bodyTypes)
    const prices = cars.map((car) => car.price)
    const years = cars.map((car) => car.year)
    const minimumPrice = Math.min(...prices)
    const maximumPrice = Math.max(...prices)
    const minimumYear = Math.min(...years)
    const maximumYear = Math.max(...years)

    const carsMatchingRange = cars.filter((car) => {
        const minPrice = Number(filters.minPrice) || minimumPrice
        const maxPrice = Number(filters.maxPrice) || maximumPrice
        const minYear = Number(filters.minYear) || minimumYear
        const maxYear = Number(filters.maxYear) || maximumYear

        return car.price >= minPrice && car.price <= maxPrice && car.year >= minYear && car.year <= maxYear
    })

    const updateFilter = (name, value) => {
        onFiltersChange({ ...filters, [name]: value })
    }

    const toggleOption = (group, value) => {
        const values = filters[group]
        const updatedValues = values.includes(value)
            ? values.filter((item) => item !== value)
            : [...values, value]

        updateFilter(group, updatedValues)
    }

    const formatPrice = (price) => Number(price).toLocaleString('uk-UA')

    return (
        <aside className='Filters-bar'>
            <div className='Filters-heading'>
                <h2>Фільтри</h2>
                <button className='ClearFilters' type='button' onClick={onReset}>Очистити</button>
            </div>

            <section className='FilterGroup'>
                <h3>Тип пального</h3>
                <div className='FuelOptions'>
                    <label className='FuelOption'>
                        <input type='checkbox' checked={filters.fuels.length === 0} onChange={() => updateFilter('fuels', [])} />
                        <span>Усі</span>
                        <small>{carsMatchingRange.length}</small>
                    </label>

                    {fuelOptions.map((fuel) => (
                        <label className='FuelOption' key={fuel}>
                            <input
                                type='checkbox'
                                value={fuel}
                                checked={filters.fuels.includes(fuel)}
                                onChange={() => toggleOption('fuels', fuel)}
                            />
                            <span>{fuel}</span>
                            <small>{carsMatchingRange.filter((car) => car.fuel === fuel).length}</small>
                        </label>
                    ))}
                </div>
            </section>

            <section className='FilterGroup'>
                <h3>Тип кузова</h3>
                <div className='FuelOptions'>
                    <label className='FuelOption'>
                        <input type='checkbox' checked={filters.bodyTypes.length === 0} onChange={() => updateFilter('bodyTypes', [])} />
                        <span>Усі</span>
                        <small>{carsMatchingRange.length}</small>
                    </label>

                    {bodyTypeOptions.map((bodyType) => (
                        <label className='FuelOption' key={bodyType}>
                            <input
                                type='checkbox'
                                value={bodyType}
                                checked={filters.bodyTypes.includes(bodyType)}
                                onChange={() => toggleOption('bodyTypes', bodyType)}
                            />
                            <span>{bodyType}</span>
                            <small>{carsMatchingRange.filter((car) => car.bodyType === bodyType).length}</small>
                        </label>
                    ))}
                </div>
            </section>

            <section className='FilterGroup'>
                <h3>Ціна, ₴</h3>
                <div className='RangeFields'>
                    <label>
                        <span>Від</span>
                        <input type='number' min={minimumPrice} max={maximumPrice} placeholder={formatPrice(minimumPrice)} value={filters.minPrice} onChange={(event) => updateFilter('minPrice', event.target.value)} />
                    </label>
                    <label>
                        <span>До</span>
                        <input type='number' min={minimumPrice} max={maximumPrice} placeholder={formatPrice(maximumPrice)} value={filters.maxPrice} onChange={(event) => updateFilter('maxPrice', event.target.value)} />
                    </label>
                </div>
                <div className='RangeSliders'>
                    <input type='range' min={minimumPrice} max={maximumPrice} value={filters.minPrice || minimumPrice} onChange={(event) => updateFilter('minPrice', event.target.value)} />
                    <input type='range' min={minimumPrice} max={maximumPrice} value={filters.maxPrice || maximumPrice} onChange={(event) => updateFilter('maxPrice', event.target.value)} />
                </div>
            </section>

            <section className='FilterGroup'>
                <h3>Рік випуску</h3>
                <div className='RangeFields'>
                    <label>
                        <span>Від</span>
                        <input type='number' min={minimumYear} max={maximumYear} placeholder={minimumYear} value={filters.minYear} onChange={(event) => updateFilter('minYear', event.target.value)} />
                    </label>
                    <label>
                        <span>До</span>
                        <input type='number' min={minimumYear} max={maximumYear} placeholder={maximumYear} value={filters.maxYear} onChange={(event) => updateFilter('maxYear', event.target.value)} />
                    </label>
                </div>
                <div className='RangeSliders'>
                    <input type='range' min={minimumYear} max={maximumYear} value={filters.minYear || minimumYear} onChange={(event) => updateFilter('minYear', event.target.value)} />
                    <input type='range' min={minimumYear} max={maximumYear} value={filters.maxYear || maximumYear} onChange={(event) => updateFilter('maxYear', event.target.value)} />
                </div>
            </section>

            <div className='FiltersInfo'>
                <img src={location} alt='' />
                <p>Усі авто можна оглянути у нашому салоні в Києві.</p>
            </div>
        </aside>
    )
}

export default Filters