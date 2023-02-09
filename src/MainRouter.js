import { Route, Switch } from "react-router-dom";

import EditProfile from "./user/EditProfile";
import Home from "./core/Home";
import Menu from "./core/Menu";
import PrivateRoute from "./auth/PrivateRoute";
import Profile from "./user/Profile";
import React from "react";
import Signin from "./auth/Signin";
import Signup from "./user/Signup";
import Users from "./user/Users";

const MainRouter = () => {
  return (
    <>
        <Route path="/" component={Menu} />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
            <Route path="/user/:userId" component={Profile} />
        </Switch>
    </>
  );
};
export default MainRouter;
