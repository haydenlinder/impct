import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item1: {
                desc: 'Uganda Nebbi Zombo Natural - Medium - Fruity',
                photoURL: 'coffee1.png',
                price: 14.5,
                qty: 1
            },
            item2: {
                desc: 'Guatemala Asociación Barillense Organic - Medium - Sweet',
                photoURL: 'coffee2.png',
                price: 13.5,
                qty: 1
            },
            item3: {
                desc: 'Colombia Medellin Smallholder - Swiss Water Process Decaf - Medium',
                photoURL: 'coffee3.png',
                price: 12,
                qty: 1
            },
            item4: {
                desc: 'impctcoffee mug - drink coffee, change the world',
                photoURL: 'coffee4.jpg',
                price: 6,
                qty: 1
            },
            item5: {
                desc: 'Guatemala Asociación Barillense Organic - Medium - Sweet',
                photoURL: 'coffee2.png',
                price: 13.5,
                qty: 1
            },
        };
    }

    remove(item) {
        delete this.state[item];
        this.setState(this.state);
    }

    subTotal() {
        let result = 0;
        const items = Object.values(this.state);
        items.forEach(item => result += item.price * item.qty);
        return result.toFixed(2);
    }

    render() { 
        const keys = Object.keys(this.state);
        return(
            <div className="cart-container">
                <div className="cart-message">Your cart {!keys.length ? 'is empty' : ''}</div>
                <div className="cart-items">
                    {keys.map(item =>
                        <div className="cart-item-relative" key={item} >
                            <div className="remove-cart-item" onClick={e => this.remove(item)}>remove</div>
                            <CartItem item={this.state[item]} />
                        </div> 
                    )}
                </div>
                <div>{keys.length} items</div>
                <div>Subtotal: ${this.subTotal()}</div>
            </div>
        );
    }
}

export default Cart;