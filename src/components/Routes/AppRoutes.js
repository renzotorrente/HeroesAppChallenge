import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import PrivatesRoutes from "./PrivatesRoute";
import PublicRoutes from "./PublicRoute";
function AppRoutes( {logged}) {
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(logged));
  }, [logged]);
  return (
    <Router>
      <Switch>
        <PublicRoutes
          path="/login"
          isAuthenticated={logged.logged}
        />

        <PrivatesRoutes
          isAuthenticated={logged.logged}
          path="/"
        />

        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    logged: state.authreducer
  };
};

export default connect(mapStateToProps)(AppRoutes);
