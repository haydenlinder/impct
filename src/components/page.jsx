import React from 'react';
import Profile from './profile';
import Menu from './menu';
import Cart from './cart';
import Leaderboard from './leaderboard';

const Page = ({ panel, setPanel }) => (
    <div id="page" className="page">
        {panel === "Page" ? <Profile /> : null}
        {panel === "Menu" ? <Menu setPanel={setPanel} /> : null}
        {panel === "Cart" ? <Cart /> : null}
        {panel === "Leaderboard" ? <Leaderboard /> : null}
    </div>
);

export default Page;