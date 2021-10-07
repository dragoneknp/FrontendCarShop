import React from 'react';
import './features.scss';
const Features = () => {
    return (
        <div className="features">
            <div className="features__container container">
                <div className="features__body">
                    <div className="features__header">Why Choose Us?</div>
                    <div className="features__description">We will help a client's problems to develop the products they
have with high quality</div>
                    <div className="features__list">
                        <div className="features__listItem features-listItem">
                            <div className="features-listItem__header">More than 10 Years Experiences</div>
                            <div className="features-listItem__description">Make the appearance of a mobile application that
has quality and increases user convenience</div>
                        </div>
                        <div className="features__listItem features-listItem">
                            <div className="features-listItem__header">Trusted by Customers</div>
                            <div className="features-listItem__description">Help create a website and redesign it so that it
becomes a website that is more trendy and looks fresh.</div>
                        </div>
                        <div className="features__listItem features-listItem">
                            <div className="features-listItem__header">Wide Range of Brand</div>
                            <div className="features-listItem__description">Create customizable illustrations with attractive
designs that are made visually through high creativity</div>
                        </div>
                    </div>
                </div>
                <div className="features__picture"></div>
            </div>
        </div>
    )};
export default Features;