import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Signin from "./Signin";
import Offices from "./dashboard/Offices";
import Desktop from "./dashboard/Desktop";
import Scheduling from "./dashboard/admin/Scheduling";
import Users from "./dashboard/admin/Users";
import RegisterUser from "./dashboard/admin/RegisterUser";

// components
import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          {/* <Navbar /> */}
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />


    {/* pages */}
    <RouteWithSidebar exact path={Routes.Offices.path} component={Offices} />
    <RouteWithSidebar exact path={Routes.Desktop.path} component={Desktop} />
    <RouteWithSidebar exact path={Routes.Scheduling.path} component={Scheduling} />
    <RouteWithSidebar exact path={Routes.Users.path} component={Users} />
    <RouteWithSidebar exact path={Routes.RegisterUser.path} component={RegisterUser} />
    
    {/* <Redirect to={Routes.NotFound.path} /> */}
  </Switch>
);
