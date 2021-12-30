import React from "react";
import "./reviews.scss";
const Reviews = () => {
    return (
        <div className="reviews">
            <div className="reviews__container container">
                <div className="reviews__header reviews-header">
                    <div className="reviews-header__label">
                        What Are People Saying About Us
                    </div>
                    <div className="reviews-header__description">
                        Enter your select domain name and choose any extension
                        name in the next step (choose between .com, .online,
                        .tech, .site, .net, and more)
                    </div>
                </div>
                <div className="reviews__body">
                    <div className="reviews__picture"></div>
                    <div className="reviews__description reviews-description">
                        <div className="reviews-description__label">
                            AutoWeb helps me to find the best car
                        </div>
                        <div className="reviews-description__comment">
                            I am very happy with the services provided, it is
                            very helpful, starting from the insight that the
                            company gave from the start that I did not
                            understand what it was so I got knowledge and made
                            my website look better.
                        </div>
                        <div className="reviews-description__author reviews-description-author">
                            <div className="reviews-description-author__name">
                                Clay Johnson
                            </div>
                            <div className="reviews-description-author__post">
                                Director at Wax Inc
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Reviews;
