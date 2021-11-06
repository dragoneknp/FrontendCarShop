import React from 'react';
import './exploreMainContent.scss';
import ExploreMainContentCard from '../ExploreMainContentCard/exploreMainContentCard';
const data = [{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 50000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 120000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 50000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 120000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 50000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 120000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 50000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 120000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 50000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 120000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 50000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 120000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 50000,
},
{
    brand: "Tesla",
    model: "Model 3",
    HP: 555,
    typeOfFuel: "energy",
    transmission: "auto",
    picture: "/images/teslaModelX1.jpeg",
    price: 120000,
}]
const ExploreMainContent: React.FC = () => {
    return (
        
        <div className="exploreMainContent">
            <div className="exploreMainContent__container container">
                <div className="exploreMainContent__search">
                    <input type="text" className="exploreMainContent__input" placeholder="Search smth.."/>
                    <button className="exploreMainContent__button redBtn">Search</button>
                </div>
                <div className="exploreMainContent__header">FoundedModel</div>
                <div className="exploreMainContent__body exploreMainContent-body">
                    
                    <div className="exploreMainContent-body__content">
                        <div className="exploreMainContent-body__resultsHeader">We’ve found 20 results of tesla</div>
                        <div className="exploreMainContent-body__results">
                                {data.map((card) => <ExploreMainContentCard {...card}/>)}
                        </div>
                    </div>
                    <aside className="ExploreMainContent-body__aside">
                        <div className="exploreMainContent-body__sorts"></div>
                        <div className="exploreMainContent-body__advertisment"></div>
                        <div className="exploreMainContent-body__contactUs"></div>
                    </aside>
                    
                    
                </div>
            </div>
        </div>
)};
export default ExploreMainContent;