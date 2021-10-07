import React from 'react';
import './newsLetter.scss';
const NewsLetter = () => {
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
                    <form className="newsLetter__form newsLetter-form">
                        
                            <div className="newsLetter-form__inputs">
                                <div className="newsLetter-form__label">Your Name</div>
                                <input type="text" className="newsLetter-form__input" placeholder="Input your name"/>
                                
                            </div>
                            <div className="newsLetter-form__inputs">
                                <div className="newsLetter-form__label">Your Email</div>
                                <input type="text" className="newsLetter-form__input" placeholder="Input your email"/>
                                
                            </div>
                        
                        <button className="newsLetter-form__button redBtn">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>

)};
export default NewsLetter;