import React from 'react';
import Profile from './profile';
import Menu from './menu';

const Page = ({ panel }) => (
    <div id="page" className="page">
        {panel === "Page" ? <Profile /> : null}
        {panel === "Menu" ? <Menu /> : null}
    </div>
);

export default Page;