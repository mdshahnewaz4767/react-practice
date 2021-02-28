import React from 'react';

const Summery = (props) => {
    const summery = props.summery;
    // console.log(summery);
    let total = 0;
    for (let i = 0; i < summery.length; i++) {
        const friend = summery[i];
        total = total + friend.income;
        console.log(total);
    }
    return (
        <div>
            <h3>Friends Summery</h3>
            <h5>Numbers of Friend: {summery.length}</h5>
            <h5>Income per Friend: {total}</h5>
        </div>
    );
};

export default Summery;