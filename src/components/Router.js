import React from 'react';
import { HashRouter , Switch , Route } from "react-router-dom";
import App from "../App";
import Recipe from './Recipe';

function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/recipe/:recipeId" component={Recipe} />
            </Switch>
        </HashRouter>
    )
}

export default Router
