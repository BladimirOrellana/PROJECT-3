import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import asyncComponent from "./../../util/asyncComponent";

class SellerRoutes extends Component {
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
          path={`${match.url}/add-seller`}
          component={asyncComponent(() =>
            import("./../routes/private/admin-view/Add-seller")
          )}
        />
        <Route
          path={`${match.url}/active-projects`}
          component={asyncComponent(() =>
            import("./../routes/private/Seller-view/Active-projects")
          )}
        />
        <Route
          path={`${match.url}/add-material-to-project`}
          component={asyncComponent(() =>
            import("./../routes/private/Seller-view/Add-material-to-project")
          )}
        />
        <Route
          path={`${match.url}/add-miscellanious`}
          component={asyncComponent(() =>
            import("./../routes/private/Seller-view/Add-miscellaneous")
          )}
        />
        <Route
          path={`${match.url}/all-quotes`}
          component={asyncComponent(() =>
            import("./../routes/private/Seller-view/All-quotes")
          )}
        />
        <Route
          path={`${match.url}/confirmed-project`}
          component={asyncComponent(() =>
            import("./../routes/private/Seller-view/Confirmed-proyects")
          )}
        />
        <Route
          path={`${match.url}/finished-project`}
          component={asyncComponent(() =>
            import("./../routes/private/Seller-view/Finished-projects")
          )}
        />
        <Route
          path={`${match.url}/raw-material`}
          component={asyncComponent(() =>
            import("./../routes/private/Seller-view/Raw-material")
          )}
        />
        <Route
        path={`${match.url}/profile`}
        component={asyncComponent(() =>
          import('./../routes/private/Profile')
        )}
      />

        <Route
          component={asyncComponent(() => import("components/Error404"))}
        />
      </Switch>
    );
  }
}

export default withRouter(SellerRoutes);
