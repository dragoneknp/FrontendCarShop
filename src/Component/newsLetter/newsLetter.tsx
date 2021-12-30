/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import "./newsLetter.scss";
import "is_js";

const NewsLetter = () => {
    const [nameInput, changeNameInput] = useState("");
    const [emailInput, changeEmailInput] = useState("");
    const [isFormCorrect, changeFormCorrect] = useState(true);
    const Validation = () => {
        return isFormCorrect ? null : (
            <div className="newsLetter__error">Name or email is incorrect</div>
        );
    };
    const emailRegexp =
        // eslint-disable-next-line no-control-regex
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    const [isSubmitted, changeSubmitted] = useState(false);
    return (
        <div className="newsLetter">
            <div className="newsLetter__container container">
                <div className="newsLetter__body">
                    <div className="newsLetter__header">
                        Subscribe Our News Letter
                    </div>

                    <div className="newsLetter__description">
                        You can read our news letter and get free knowledge
                    </div>
                    {isSubmitted ? (
                        <img src="/images/tick.svg" alt="" />
                    ) : (
                        <>
                            <form className="newsLetter__form newsLetter-form">
                                <div className="newsLetter-form__inputs">
                                    <div className="newsLetter-form__label">
                                        Your Name
                                    </div>
                                    <input
                                        value={nameInput}
                                        onChange={(event) =>
                                            changeNameInput(event.target.value)
                                        }
                                        type="text"
                                        className="newsLetter-form__input"
                                        placeholder="Input your name"
                                    />
                                </div>
                                <div className="newsLetter-form__inputs">
                                    <div className="newsLetter-form__label">
                                        Your Email
                                    </div>
                                    <input
                                        value={emailInput}
                                        onChange={(event) =>
                                            changeEmailInput(event.target.value)
                                        }
                                        type="text"
                                        className="newsLetter-form__input"
                                        placeholder="Input your email"
                                    />
                                </div>

                                <button
                                    className="newsLetter-form__button redBtn"
                                    onClick={(event) => {
                                        event?.preventDefault();
                                        if (
                                            nameInput &&
                                            emailInput &&
                                            emailRegexp.test(emailInput)
                                        ) {
                                            changeNameInput("");
                                            changeEmailInput("");
                                            changeSubmitted(true);
                                        } else {
                                            changeFormCorrect(false);
                                        }
                                    }}
                                >
                                    Subscribe
                                </button>
                            </form>
                            <Validation />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default NewsLetter;
