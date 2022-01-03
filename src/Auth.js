import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUserCookie } from './services/session';

const PrivateRoute = ({ component: Component, user, ...rest }) => (


  <Route
    {...rest}
    render={(props) => (getUserCookie() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    ))
    }
  />
);

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    user: auth.user.access_token,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
