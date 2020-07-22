import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from 'react-router-dom';
import Dashboard from "./Screens/Dashboard";

/**
 * Display if route is not exists
*/
function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}


export default function Navigation() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
