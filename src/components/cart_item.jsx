import React from 'react';
import Avitar from './avitar';


class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.item
        };
    }

    render() {
        const { desc, photoURL, price, qty } = this.state;
        return(
            <div className="cart-item">
                <div className="photo-container">
                    <Avitar url={photoURL} alt="" />
                </div>
                <div className="cart-item-details">
                    <div>{desc}</div>
                    <div>${price.toFixed(2)}</div>
                    <div>Qty: {qty}</div>
                </div>
            </div>
        );
    }
}

export default CartItem;