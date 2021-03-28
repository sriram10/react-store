import React from 'react';
import {
    Switch,
    Route,
} from 'react-router';
import { Menus } from "../assets/Menus";
import Pages from "../pages"

const RouterContainer = () => {
    let menuData = Menus.data; 
    return(
        <Switch>
            {menuData.map((menu) =>
                <Route exact path={menu.url} component={Pages[menu.components]} />
            )}
            <Route path="*" render={() => <h1>404 - Not Found</h1>} />
        </Switch>
    )
}

export default RouterContainer;
