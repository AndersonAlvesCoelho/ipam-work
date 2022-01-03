import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

//PAGES
import Offices from "../pages/Offices";
import Desktop from "../pages/Desktop";
import Scheduling from "../pages/admin/Scheduling";
import Users from "../pages/admin/Users";
import RegisterUser from "../pages/admin/RegisterUser";


export default () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {/* <Preloader show={loaded ? false : true} /> */}
      <Sidebar />

      <main className="content">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/dashboard/offices" exact component={Offices} />
          <Route path="/dashboard/desktop/:office" exact component={Desktop} />
          <Route path="/dashboard/scheduling" exact component={Scheduling} />
          <Route path="/dashboard/users" exact component={Users} />
          <Route path="/dashboard/users/register" exact component={RegisterUser} />

          <Redirect from="/dashboard" to="/dashboard/offices" />
        </Switch>

        <Footer />
      </main>
    </>
  );
}
