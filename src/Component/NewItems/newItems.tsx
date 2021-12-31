import React from "react";
import "./newItems.scss";
const NewItems = () => {
    return (
        <div className="newItems">
            <div className="newItems__container container">
                <div className="newItems__header">New Items</div>
                <div className="newItems__slides">
                    <div className="row1">
                        <div className="newItems__slide_big">
                            <div className="newItems__name_big">Model SV</div>
                            <div className="newItems__productOwner_big">
                                Esemka Car
                            </div>
                            <div className="newItems__price_big">$12000</div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="newItems__slide_small">
                            <div className="newItems__name_small">Model SV</div>
                            <div className="newItems__productOwner_small">
                                Esemka Car
                            </div>
                            <div className="newItems__price_small">$12000</div>
                        </div>
                        <div className="newItems__slide_small">
                            <div className="newItems__name_small">Model SV</div>
                            <div className="newItems__productOwner_small">
                                Esemka Car
                            </div>
                            <div className="newItems__price_small">$12000</div>
                        </div>
                        <div className="newItems__slide_small">
                            <div className="newItems__name_small">Model SV</div>
                            <div className="newItems__productOwner_small">
                                Esemka Car
                            </div>
                            <div className="newItems__price_small">$12000</div>
                        </div>
                        <div className="newItems__slide_small">
                            <div className="newItems__name_small">Model SV</div>
                            <div className="newItems__productOwner_small">
                                Esemka Car
                            </div>
                            <div className="newItems__price_small">$12000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewItems;
