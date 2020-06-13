import React from 'react';
import Avitar from './avitar';

const pic1 = require('../images/coffee1.png')
const pic2 = require('../images/coffee2.png')
const pic3 = require('../images/coffee3.png')
const pic4 = require('../images/coffee4.jpg')
const pic5 = require('../images/coffee5.png')

const purchases = [
    {
        desc: 'F111-11-1111',
        photoURL: pic2,
        price: 50.50,
        date: 'Jun 10 2020',
        status: 'shipped'
    },
    {
        desc: 'B111-11-1111',
        photoURL: pic3,
        price: 25.25,
        date: 'Apr 1 2020',
        status: 'delivered',
    },
    {
        desc: 'A111-11-1111',
        photoURL: pic4,
        price: 12.12,
        date: 'Feb 7 2020',
        status: 'delivered'
    },
]

const purchase = ({ desc, photoURL, price, date, status }, i) => (
    <div key={i} className="cart-item purchase-item">
        <div className="view-order">View Order</div>
        <div className="photo-container">
            <Avitar url={photoURL} alt="" />
        </div>
        <div className="cart-item-details">
            <div>Order number {desc}</div>
            <div>Placed {date}</div>
            <div>Status: {status}</div>
            <div>${price.toFixed(2)}</div>
        </div>
    </div>
)

const Purchases = () => (
    <div className="purchases-container" >
        {purchases.map((purchaseItem, i) => (
            purchase(purchaseItem, i)
        ))}
    </div>
);

export default Purchases;

