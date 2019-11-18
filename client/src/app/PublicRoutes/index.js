import React, {Component} from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import asyncComponent from "./../../util/asyncComponent";
import {connect} from 'react-redux';

class PublicRoutes extends Component{
    render(){
        console.log("PUBLIC ROUTES______ ",this.props)
        const {match } = this.props;
        if(this.props.userLogged === null){
            return(
                <Switch>
                <Route
                  path={`${match.url}/home`}
                  component={asyncComponent(() =>
                    import("./../routes/public/Home")
                  )}
                />
                
                <Route
                  path={`${match.url}/contact`}
                  component={asyncComponent(() =>
                    import("./../routes/public/Contact")
                  )}
                />
                <Route
                  path={`${match.url}/get-a-free-quote`}
                  component={asyncComponent(() =>
                    import("./../routes/public/Get-a-free-quote")
                  )}
                />
                <Route
                  path={`${match.url}/about`}
                  component={asyncComponent(() =>
                    import("./../routes/public/About")
                  )}
                />
                <Route
                  path={`${match.url}/reviews`}
                  component={asyncComponent(() =>
                    import("./../routes/public/Reviews")
                  )}
                />
                <Route
                component={asyncComponent(() =>
                  import("components/Error404")
                )}
              />
               
              </Switch>
            )

        }
       
    }
}

const mapStateToProps = state => {
    return {
      userLogged: state.auth.user
    };
  };

export default withRouter(connect(mapStateToProps, null)(PublicRoutes))