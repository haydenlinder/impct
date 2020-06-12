import React from 'react';
import { cart } from '../shopping_cart';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            menu: false
        };
    }

    toggleMenu(e) {
        const { setPanel } = this.props;
        const { menu } = this.state;
        if (menu) {
            setPanel('Page')
        } else {
            setPanel('Menu')
        }
        this.setState({ menu: !menu })
    }

    render() {
        const { menu } = this.state;
        return(
            <div id='header' className="header">
                <div className="nav">
                    <div 
                        className="navlink menu"
                        onClick={e => this.toggleMenu(e)}
                    >
                        {menu ? 
                        <div>X</div>
                        :
                        <div>
                            <div className="menu-line"></div>
                            <div className="menu-line"></div>
                            <div className="menu-line"></div>
                        </div>
                        }
                    </div>
                    <div className="navlink home">
                        impct
                    </div>
                    <div className="navlink cart">
                        {cart}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;