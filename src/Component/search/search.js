import React from 'react';
import './search.scss';
const Search = () => {
    return (
        <div className="search">
            <div className="search__container container">
                <div className="search__body search-body">
                    <div className="search-body__select">
                        Select Brand
                    </div>
                    <div className="search-body__select">
                        Select Model
                    </div>
                    <button className="search-body__searchBtn redBtn">Search</button>

                </div>
            </div>
        </div>

)};
export default Search;