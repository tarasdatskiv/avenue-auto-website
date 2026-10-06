import sortArrow from '../../assets/icons/chevron-down-muted.svg'
import './Sort.css'

function Sort({ count, value, onChange, options }) {
    const optionEntries = Object.entries(options)
    const selectedValue = Object.hasOwn(options, value) ? value : (optionEntries[0]?.[0] ?? '')
    const hasOptions = optionEntries.length > 0

    return (
        <div className='SortHeader'>
            <p className='SortCount'>Знайдено <strong>{count} автомобілів</strong></p>

            <label className='SortBlock'>
                <span className='SortLabel'>Сортувати:</span>

                <span className='SortDropdown'>
                    <select
                        className='SortSelect'
                        value={selectedValue}
                        onChange={(event) => onChange(event.target.value)}
                        disabled={!hasOptions}
                    >
                        {!hasOptions && <option value=''>Немає варіантів</option>}
                        {optionEntries.map(([optionValue, label]) => (
                            <option key={optionValue} value={optionValue}>
                                {label}
                            </option>
                        ))}
                    </select>
                    <img className='SortArrow' src={sortArrow} alt='' />
                </span>
            </label>
        </div>
    )
}

export default Sort
