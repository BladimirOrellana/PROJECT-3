import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import asyncComponent from "./../../util/asyncComponent";
import { connect } from "react-redux";

class PublicRoutes extends Component {
  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route
          path={`${match.url}/home`}
          component={asyncComponent(() => import("./../routes/public/Home"))}
        />

        <Route
          path={`${match.url}/contact`}
          component={asyncComponent(() => import("./../routes/public/Contact"))}
        />
        <Route
          path={`${match.url}/about`}
          component={asyncComponent(() => import("./../routes/public/About"))}
        />
        <Route
          path={`${match.url}/reviews`}
          component={asyncComponent(() => import("./../routes/public/Reviews"))}
        />
        <Route
          path={`${match.url}/get-a-free-quote`}
          component={asyncComponent(() =>
            import("./../routes/private/Client-view/Get-a-free-quote")
          )}
        />
        <Route
          component={asyncComponent(() => import("./../routes/public/Home"))}
        />
      </Switch>
    );
  }
}



export default withRouter(connect(null, null)(PublicRoutes));
