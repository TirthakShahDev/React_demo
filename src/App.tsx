import React, { Component } from "react";
import * as AppActionCreators from "./store/actions/app.Actions";
import { withRouter, Switch, Redirect, Route } from "react-router";
import { connect } from "react-redux";
import { AppState, isAuthenticated } from "./store/state/app.state";
import { bindActionCreators, Dispatch } from "redux";
import _ from "lodash";
import { EmptyLayout, LayoutRoute, MainLayout } from "./layout";
import LoginPage from "./pages/loginPage";
import { IApplicationProps } from "./types/PropTypes";
import PageSpinner from "./components/PageSpinner";
import componentQueries from "react-component-queries";
import ErrorHook from "./components/ErrorHook";
import { toast } from "react-toastify";

import "./assets/styles/reduction.scss";
import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import "react-toastify/dist/ReactToastify.css";


const DashboardPage = React.lazy(() => import("./pages/dashboardPage"));
const ArticlePage = React.lazy(() => import("./pages/articlePage"));

interface IAppProps extends IApplicationProps {
  breakpoint: string;
}
interface IState {}
class App extends Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { isOpen: false };
  }
  render() {
    //Over Ride Window in this case with Toast
    window.alert = toast
    return (
      <ErrorHook>
        <Switch>
          <LayoutRoute
            exact
            path="/login"
            layout={EmptyLayout}
            component={(props: IAppProps) => <LoginPage {...this.props} />}
          />
          <MainLayout
            breakpoint={this.props.breakpoint}
            selected={null}
            logout={this.props.logout}
            changeLanguage={this.props.changeLanguage}
          >
            <React.Suspense fallback={<PageSpinner />}>
              <Route
                exact
                path="/"
                component={isAuthenticated(DashboardPage)}
              />
              <Route
                exact
                path="/Articles"
                component={isAuthenticated(ArticlePage)}
              />
            </React.Suspense>
          </MainLayout>
          <Redirect to="/login" />
        </Switch>
      </ErrorHook>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  userData: state.UserData,
  errors : state.errorLog
});
const mapDispatchtoProps = (dispatch: Dispatch) =>
  bindActionCreators(_.assign({}, AppActionCreators), dispatch);

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: "xs" };
  }

  if (576 < width && width < 767) {
    return { breakpoint: "sm" };
  }

  if (768 < width && width < 991) {
    return { breakpoint: "md" };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: "lg" };
  }

  if (width > 1200) {
    return { breakpoint: "xl" };
  }

  return { breakpoint: "xs" };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchtoProps
  )(componentQueries(query)(App as any)) as any
);
