import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {name, email, phone, income, image} = props.friend;
    // console.log(props);
    return (
        <div className="friends">
            <div className="friend-image">
                <img src={image} alt=""/>
            </div>

            <div className="friend-description">
                <h4>Name: <span>{name}</span></h4>
                <h4>Email: <span>{email}</span></h4>
                <h4>Phone Number: <span>{phone}</span></h4>
                <h4>Income: <span>{income}</span></h4>
                <button onClick={() => props.handleAddFriend(props.friend)}>
                    <FontAwesomeIcon icon={faUserPlus} /> 
                   <p className="btn-info"> Add Friends Info</p>
                </button>
            </div>
        </div>

    );
};

export default Cart;