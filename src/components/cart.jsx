import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item5: {
                desc: 'impctcoffee gift card',
                photoURL: 'coffee5.png',
                price: 15,
                qty: 1,
                id: 'item5'
            },  
            item1: {
                desc: 'Uganda Nebbi Zombo Natural - Medium - Fruity',
                photoURL: 'coffee1.png',
                price: 14.5,
                qty: 1,
                id: 'item1'
            },
            item2: {
                desc: 'Guatemala Asociación Barillense Organic - Medium - Sweet',
                photoURL: 'coffee2.png',
                price: 13.5,
                qty: 1,
                id: 'item2'
            },
            item3: {
                desc: 'Colombia Medellin Smallholder - Swiss Water Process Decaf - Medium',
                photoURL: 'coffee3.png',
                price: 12,
                qty: 1,
                id: 'item3'
            },
            item4: {
                desc: 'impctcoffee mug - drink coffee, change the world',
                photoURL: 'coffee4.jpg',
                price: 6,
                qty: 1,
                id: 'item4'
            }
        };
        this.setQty = this.setQty.bind(this);
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

    setQty(item, qty) {
        // debugger
        this.state[item].qty = qty;
        this.setState(this.state);
    }

    render() { 
        const keys = Object.keys(this.state);
        return(
            <div className="cart-container">
                <div className="cart-message">Your cart {!keys.length ? 'is empty' : ''}</div>
                <div className="cart-items">
                    {keys.map((item, i) =>
                        <div className="cart-item-relative" key={item} >
                            <div className="remove-cart-item" onClick={e => this.remove(item)}>remove</div>
                            <div className="cart-counter"><div>{i+1}</div></div>
                            <CartItem item={this.state[item]} setQty={this.setQty} />
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