import React, { useState } from 'react';
import './exploreSearch.scss';
const ExploreSearch = () => {
    const [popupVisibility, changePopupVisibility] = useState({
        make: false,
        model: false,
        condition: false,
        transmission: false,
        body: false,
        drive: false,
        fuelType: false,
        color: false,

    })
    return (
        <div className="exploreSearch">
            <div className="exploreSearch__container container">
                <div className="exploreSearch__filters">
                    <div className={`exploreSearch__filter exploreSearch-filter ${popupVisibility.make ? "opened" : "closed"}`}
                    onClick={() => changePopupVisibility({...popupVisibility, make: !popupVisibility.make})}>
                        <h2 className="exploreSearch-filter__header">Make</h2>
                    </div>
                    <div className={`exploreSearch__filter exploreSearch-filter ${popupVisibility.model ? "opened" : "closed"}`}
                    onClick={() => changePopupVisibility({...popupVisibility, model: !popupVisibility.model})}>
                        <h2 className="exploreSearch-filter__header">Model</h2>
                    </div>
                    <div className={`exploreSearch__filter exploreSearch-filter ${popupVisibility.condition ? "opened" : "closed"}`}
                    onClick={() => changePopupVisibility({...popupVisibility, condition: !popupVisibility.condition})}>
                        <h2 className="exploreSearch-filter__header">Condition</h2>
                    </div>
                    <div className={`exploreSearch__filter exploreSearch-filter ${popupVisibility.transmission ? "opened" : "closed"}`}
                    onClick={() => changePopupVisibility({...popupVisibility, transmission: !popupVisibility.transmission})}>
                        <h2 className="exploreSearch-filter__header">Transmission</h2>
                    </div>
                    <div className={`exploreSearch__filter exploreSearch-filter ${popupVisibility.body ? "opened" : "closed"}`}
                    onClick={() => changePopupVisibility({...popupVisibility, body: !popupVisibility.body})}>
                        <h2 className="exploreSearch-filter__header">Body</h2>
                    </div>
                    <div className={`exploreSearch__filter exploreSearch-filter ${popupVisibility.drive ? "opened" : "closed"}`}
                    onClick={() => changePopupVisibility({...popupVisibility, drive: !popupVisibility.drive})}>
                        <h2 className="exploreSearch-filter__header">Drive</h2>
                    </div>
                    <div className={`exploreSearch__filter exploreSearch-filter ${popupVisibility.fuelType ? "opened" : "closed"}`}
                    onClick={() => changePopupVisibility({...popupVisibility, fuelType: !popupVisibility.fuelType})}>
                        <h2 className="exploreSearch-filter__header">Fuel Type</h2>
                    </div>
                    <div className={`exploreSearch__filter exploreSearch-filter ${popupVisibility.color ? "opened" : "closed"}`}
                    onClick={() => changePopupVisibility({...popupVisibility, color: !popupVisibility.color})}>
                        <h2 className="exploreSearch-filter__header">Color</h2>
                    </div>
                </div>
            </div>
        </div>
)};
export default ExploreSearch;