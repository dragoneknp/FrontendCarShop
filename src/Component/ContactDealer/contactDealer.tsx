import React from "react";
import "./contactDealer.scss";
const ContactDealer = () => {
    return (
        <div className="contactDealer">
            <div className="contactDealer__header">Contact Dealer</div>
            <div className="contactDealer__form">
                <input
                    type="text"
                    className="contactDealer__input"
                    placeholder="Your name"
                />
                <input
                    type="text"
                    className="contactDealer__input"
                    placeholder="Your email"
                />
                <input
                    type="text"
                    className="contactDealer__input"
                    placeholder="Your message"
                />
            </div>
            <button className="contactDealer__button redBtn">Send message</button>
        </div>
    );
};
export default ContactDealer;
