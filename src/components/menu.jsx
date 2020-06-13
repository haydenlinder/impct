import React from 'react';

const Menu = ({setPanel}) => (
    <div className="menu-container">
        <div className="menu-item" onClick={e => setPanel('Leaderboard')}>Leaderboard</div>
        <div className="menu-item">Logout</div>
    </div>
);

export default Menu;