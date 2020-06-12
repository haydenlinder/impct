import React from 'react';
import Profile from './profile';
import Menu from './menu';
import Cart from './cart';

const Page = ({ panel }) => (
    <div id="page" className="page">
        {panel === "Page" ? <Profile /> : null}
        {panel === "Menu" ? <Menu /> : null}
        {panel === "Cart" ? <Cart /> : null}
    </div>
);

export default Page;