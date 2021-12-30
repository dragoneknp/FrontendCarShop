/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import "./contactDealer.scss";
const ContactDealer = () => {
    const [nameInput, changeNameInput] = useState("");
    const [emailInput, changeEmailInput] = useState("");
    const [messageInput, changeMessageInput] = useState("");
    const [isFormCorrect, changeFormCorrect] = useState(true);
    const [isSubmitted, changeSubmitted] = useState(false);
    const Validation = () => {
        return isFormCorrect ? null : (
            <div className="contactDealer__error">
                Name or email is incorrect
            </div>
        );
    };
    const emailRegexp =
        // eslint-disable-next-line no-control-regex
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    return (
        <div className="contactDealer">
            <div className="contactDealer__header">Contact Dealer</div>
            {isSubmitted ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/images/tick.svg"
                        alt=""
                        className="completeImg"
                    />
                </div>
            ) : (
                <>
                    <div className="contactDealer__form">
                        <input
                            type="text"
                            className="contactDealer__input"
                            placeholder="Your name"
                            value={nameInput}
                            onChange={(event) =>
                                changeNameInput(event.target.value)
                            }
                        />
                        <input
                            type="text"
                            className="contactDealer__input"
                            placeholder="Your email"
                            value={emailInput}
                            onChange={(event) =>
                                changeEmailInput(event.target.value)
                            }
                        />
                        <input
                            type="text"
                            className="contactDealer__input"
                            placeholder="Your message"
                            value={messageInput}
                            onChange={(event) =>
                                changeMessageInput(event.target.value)
                            }
                        />
                    </div>
                    <button
                        className="contactDealer__button redBtn"
                        onClick={() => {
                            if (
                                nameInput &&
                                emailInput &&
                                messageInput &&
                                emailRegexp.test(emailInput)
                            ) {
                                changeNameInput("");
                                changeMessageInput("");
                                changeEmailInput("");
                                changeSubmitted(true);
                            } else {
                                changeFormCorrect(false);
                            }
                        }}
                    >
                        Send message
                    </button>
                    <Validation />
                </>
            )}
        </div>
    );
};
export default ContactDealer;
