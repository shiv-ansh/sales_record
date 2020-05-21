import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import AddStaff from "../components/AddStaff";
import Dashboard from "../components/DashBoard";
import Edit from "../components/Edit";
const Routes = () => {

    return (

        <>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/add-staff"><AddStaff /></Route>
                <Route path="/dashboard"><Dashboard /></Route>
                <Route path="/edit/:id" render={(props) => <Edit  {...props} />} />

            </Switch>
        </>

    )
}


export default Routes;