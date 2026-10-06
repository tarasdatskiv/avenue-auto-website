import { useMemo, useState } from 'react'
import './CatalogPage.css'
import HeroSection from '../../components/HeroSection/HeroSection'
import SearchBar from '../../components/SearchBar/SearchBar'
import CarCard from '../../components/CarCard/CarCard'
import Filters from '../../components/Filters/Filters'
import Sort from '../../components/Filters/Sort'
import { cars } from '../../data/cars'

const defaultFilters = {
  fuels: [],
  bodyTypes: [],
  minPrice: '',
  maxPrice: '',
  minYear: '',
  maxYear: '',
  brand: 'all',
  search: '',
}

const sortOptions = {
  newest: 'Спочатку нові',
  priceAsc: 'Від дешевих',
  priceDesc: 'Від дорогих',
  mileageAsc: 'Менший пробіг',
}

const sortComparators = {
  newest: (a, b) => b.year - a.year,
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  mileageAsc: (a, b) => a.mileage - b.mileage,
}

function CatalogPage() {
  const [filters, setFilters] = useState(defaultFilters)
  const [sortBy, setSortBy] = useState('newest')

  const filteredCars = useMemo(() => {
    const search = filters.search.trim().toLowerCase()

    return cars.filter((car) => {
      const matchesFuel = filters.fuels.length === 0 || filters.fuels.includes(car.fuel)
      const matchesBodyType = filters.bodyTypes.length === 0 || filters.bodyTypes.includes(car.bodyType)
      const matchesBrand = !filters.brand || filters.brand === 'all' || car.brand === filters.brand
      const matchesPrice = (!filters.minPrice || car.price >= Number(filters.minPrice))
        && (!filters.maxPrice || car.price <= Number(filters.maxPrice))
      const matchesYear = (!filters.minYear || car.year >= Number(filters.minYear))
        && (!filters.maxYear || car.year <= Number(filters.maxYear))
      const matchesSearch = !search || `${car.brand} ${car.model}`.toLowerCase().includes(search)

      return matchesFuel && matchesBodyType && matchesBrand && matchesPrice && matchesYear && matchesSearch
    })
  }, [filters])

  const sortedCars = useMemo(() => {
    const compare = sortComparators[sortBy] ?? sortComparators.newest

    return [...filteredCars].sort(compare)
  }, [filteredCars, sortBy])

  const updateFilter = (name, value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: value,
    }))
  }

  const resetFilters = () => setFilters(defaultFilters)

  return(
    <>
    <HeroSection />
      <SearchBar
        search={filters.search}
        brand={filters.brand}
        onSearchChange={(value) => updateFilter('search', value)}
        onBrandChange={(value) => updateFilter('brand', value)}
      />
      <main className="CatalogLayout">
        <Filters cars={cars} filters={filters} onFiltersChange={setFilters} onReset={resetFilters} />
        <div className="CatalogContent">
          <Sort count={sortedCars.length} value={sortBy} onChange={setSortBy} options={sortOptions} />
          <section className="CarList">
            {sortedCars.length > 0 ? (
              sortedCars.map((car) => <CarCard key={car.id} car={car} />)
            ) : (
              <p className="NoResults">За заданими параметрами авто не знайдено.</p>
            )}
          </section>
        </div>
      </main>
      </>
  )
}

export default CatalogPage