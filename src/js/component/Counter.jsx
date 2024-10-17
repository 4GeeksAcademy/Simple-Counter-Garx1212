import React from "react";
import PropTypes from 'prop-types';

 const Counter = () => {
    let initialCounter = 0;

    const updateCounter = () => {
        const four = Math.floor(initialCounter / 1000) % 10;
        const three = Math.floor(initialCounter / 100) % 10;
        const two = Math.floor(initialCounter / 10) % 10;
        const one = Math.floor(initialCounter / 1) % 10;

        document.querySelector(".four").textContent = four;
        document.querySelector(".three").textContent = three;
        document.querySelector(".two").textContent = two;
        document.querySelector(".one").textContent = one;

        initialCounter++;
    };

    setInterval(updateCounter, 1000);

    return (
        <div className="totalCounter">
            <div className="calendar">
                <i className="far fa-clock" />
            </div>
            <div className="four">0</div>
            <div className="three">0</div>
            <div className="two">0</div>
            <div className="one">0</div>
        </div>
    );
};

Counter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};
export default Counter;