import React from 'react';
import { cart } from '../shopping_cart';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
    }

    render() {
        const { panel, setPanel } = this.props;
        return(
            <div id='header' className="header">
                <div className="nav">
                    <div 
                        className={"navlink menu" + (panel === 'Menu' ? " selected" : '')}
                        onClick={e => panel === 'Menu' ? setPanel('Page') : setPanel('Menu')}
                    >
                        {panel === 'Menu' ? 
                        <div>X</div>
                        :
                        <div>
                            <div className="menu-line"></div>
                            <div className="menu-line"></div>
                            <div className="menu-line"></div>
                        </div>
                        }
                    </div>
                    <div className="navlink home" onClick={e => setPanel('Page')}>
                        impct
                    </div>
                    <div 
                        className={"navlink cart" + (panel === 'Cart' ? ' selected' : '')}
                        onClick={e => panel === 'Cart' ? setPanel('Page') : setPanel('Cart')}
                    >
                        {cart}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;