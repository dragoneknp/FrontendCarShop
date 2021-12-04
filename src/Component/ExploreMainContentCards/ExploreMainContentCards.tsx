import React from "react";
import ExploreMainContentCard from "../ExploreMainContentCard/exploreMainContentCard";

const MakeExploreMainContentCards = (data: any[], currentPage: number) => {
    return (
        <div key={currentPage} className="exploreMainContent-body__carCards">
            {data.slice(currentPage - 1, currentPage + 4).map((card) => (
                <ExploreMainContentCard
                    {...card}
                    key={`${card.brand}_${card.model}_${card.HP}_${card.typeOfFuel}_${card.transmission}_${card.price}`}
                />
            ))}
        </div>
    );
};
export default MakeExploreMainContentCards;
