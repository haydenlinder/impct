import React from 'react';
import Avitar from './avitar';


class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.item;
    }

    handleChange(item, qty) {
        const { setQty } = this.props;
        if (isNaN(parseInt(qty))  && qty !== '') return null;
        if (qty < 0) {
             setQty(item, 0);
        } else {
            setQty(item, qty);
        }
    }

    render() {
        const { desc, photoURL, price, qty, id } = this.state;
        return(
            <div className="cart-item">
                <div className="photo-container">
                    <Avitar url={photoURL} alt="" />
                </div>
                <div className="cart-item-details">
                    <div>{desc}</div>
                    <div>${price.toFixed(2)}</div>
                    <div className="qty">Qty: <input type="text" value={qty} onChange={e => this.handleChange(id, e.currentTarget.value)}/>
                        <div>
                            <div className='qty-up' onClick={e => this.handleChange(id,qty+1)}>v</div>
                            <div className='qty-down' onClick={e => this.handleChange(id,qty-1)}>v</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CartItem;