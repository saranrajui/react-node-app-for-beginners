import React from 'react'
import { NavLink } from 'react-router-dom';
import Whoami from './Whoami';
import WhatIdo from './WhatIdo';
import Portfolio from './Portfolio';

const ddMenuList = [
    { label: "Fetch API", href: "whoami", componentName: Whoami  },
    { label: "Our Team", href: "whatido", componentName: WhatIdo },
    { label: "Portfolio", href: "portfolio", componentName: Portfolio},
];
const composedList = [];

const renderList = () => {
    composedList.length = 0;
    for (let index = 0; index < ddMenuList.length; index++) {
        let el = '';
        if (ddMenuList[index].href != '#divider')
            el = <NavLink className="dropdown-item" key={ ddMenuList[index].label } to={ddMenuList[index].href}> { ddMenuList[index].label } </NavLink>
        else
            el = <div className="dropdown-divider"></div>

        composedList.push(el);
    }
    return composedList;
}

function DdMenu() {
    return (
        renderList()
    )
}

export default DdMenu;