import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <ToastContainer />
        <Component {...props} />
      </Layout>
    )}
  />
);

export default LayoutRoute;
