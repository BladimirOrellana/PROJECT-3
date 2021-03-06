import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import asyncComponent from "./../../util/asyncComponent";
import {connect} from 'react-redux';
class LoggedInClientRoutes extends Component {
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
          path={`${match.url}/get-a-free-quote`}
          component={asyncComponent(() =>
            import("./../routes/private/Client-view/Get-a-free-quote")
          )}
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
        exact
        path={`${match.url}/your-quote/details/:quoteId`}
        component={asyncComponent(() =>
          import('./../routes/private/Client-view/Your-quote-details')
        )}
      />
        <Route
          path={`${match.url}/your-quote`}
          component={asyncComponent(() =>
            import("./../routes/private/Client-view/your-quotes")
          )}
        />
       {/*  <Route
        path={`${match.url}/profile`}
        component={asyncComponent(() =>
          import('./../routes/private/Profile')
        )}
        />*/}
     

        <Route
          component={asyncComponent(() => import("./../routes/public/Home"))}
        />
      </Switch>
    );
  }
}



export default withRouter(LoggedInClientRoutes);
