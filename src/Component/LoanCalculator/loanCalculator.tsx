import React from "react";
import "./loanCalculator.scss";
const LoanCalculator = () => {
    return (
        <div className="loanCalculator">
            <div className="loanCalculator__header">Loan Calculator</div>
            <div className="loanCalculator__description">
                What a brand new resource, You can try our resource and explore
                how it works
            </div>
            <div className="loanCalculator__form loanCalculator-form">
                <div className="loanCalculator-form__price">
                    <div className="loanCalculator-form__header">
                        Car Price ($)
                    </div>
                    <input
                        className="loanCalculator-form__input"
                        placeholder="Input your price car"
                    ></input>
                </div>
                <div className="loanCalculator-form__investRate">
                    <div className="loanCalculator-form__header">
                        Invest Rate (%)
                    </div>
                    <input
                        className="loanCalculator-form__input"
                        placeholder="Input your invest rate"
                    ></input>
                </div>
                <div className="loanCalculator-form__periode">
                    <div className="loanCalculator-form__header">
                        Periode Month
                    </div>
                    <input
                        className="loanCalculator-form__input"
                        placeholder="Input periode month"
                    ></input>
                </div>
                <div className="loanCalculator-form__payment">
                    <div className="loanCalculator-form__header">
                        Down Payment ($)
                    </div>
                    <input
                        className="loanCalculator-form__input"
                        placeholder="Input your down payment"
                    ></input>
                </div>
            </div>
            <button className="loanCalculator-form__button redBtn">
                Calculate
            </button>
        </div>
    );
};
export default LoanCalculator;
