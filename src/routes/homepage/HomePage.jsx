import React from 'react'
import SearchBar from '../../components/searchBar/SearchBar'

const HomePage = () => {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Discover Homes That Fit Your Lifestyle</h1>
                    <p>Discover modern spaces designed for the way you live today. Whether you're searching for a cozy apartment, a family home, or your next investment, we make finding the perfect place simple, fast, and seamless.</p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>18+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                         <div className="box">
                            <h1>180</h1>
                            <h2>Awards Gained</h2>
                        </div>
                         <div className="box">
                            <h1>1300+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgcontainer">
                <img src="bg.png" alt="" />
            </div>
        </div>

    )
}

export default HomePage