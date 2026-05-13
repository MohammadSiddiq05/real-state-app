import React, { useState } from 'react'

const types = ["buy", "rent"]

const SearchBar = () => {

    const [query, setQuery] = useState({
        type: "buy",
        city: "",
        minprice: 0,
        maxprice: 0
    })

    

    return (
        <div className='searchBar'>

            <div className="type">
                <button>Buy</button>
                <button>Rent</button>
            </div>
            <form>
                <input type="text" name="Localtion" placeholder='City Location' />
                <input type="number" name="minPrice" min={0} max={10000000} placeholder='Min Price' />
                <input type="number" name="maxPrice" min={0} max={10000000} placeholder='Max Price' />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar;