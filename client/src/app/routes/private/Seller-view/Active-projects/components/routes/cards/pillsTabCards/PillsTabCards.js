import React from "react";
import {connect} from 'react-redux';
import PaymentModal from "./../../../../Modals/Payments";
import MiscellaneousModal from "./../../../../Modals/Miscellaneous";
import MaterialDialog from './../../../../fullScreenMaterialDialog/FullScreenDialog';
import {getUserWithQuoteAction} from './../../../../../../../../../actions/GetUsersWithQuotes';
// import MaterialModal from './../Modals/Material';
import "./../../../../index.css";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardText,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import NestedList from "./../../list/nestedList/NestedList";
import classnames from "classnames";

class PillsTabCards extends React.Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    console.log("MISCELLANEOS modal ", this.props)
    if (!this.props.allProjectInfo.project) {
      return <div></div>;
    } else {
      //MISCELLANEOUS
      const getMiscellaneousTotal = () => {
        const getArrayOfPrice = this.props.allProjectInfo.project.miscellaneous.map(
          amount => {
            return parseInt(amount.amount.$numberDecimal);
          }
        );
        let total = getArrayOfPrice.reduce((a, b) => a + b, 0);
        return total;
      };
      const miscellaneousData = this.props.allProjectInfo.project.miscellaneous;

      const miscellaneous = () => {
        if (miscellaneousData.length === 0) {
          return (
            <div>
              <h1 className="text-center">No Data</h1>
              <button className="btn btn-block">Add Miscellaneous</button>
              <MiscellaneousModal userinfo={this.props.allProjectInfo.user} project={this.props.allProjectInfo.project} />
            </div>
          );
        } else {
          let getMiscellaneous = miscellaneousData.map(data => {
            return <NestedList miscellaneousData={data} />;
          });
          return (
            <div>
              <MiscellaneousModal userinfo={this.props.allProjectInfo.user}  project={this.props.allProjectInfo.project} />

              {getMiscellaneous}
            </div>
          );
        }
      };
      //PAYMENTS
      const getpaymentsTotal = () => {
        const getpaymentsArray = this.props.allProjectInfo.project.employerPayments.map(
          amount => {
            return parseInt(amount.$numberDecimal);
          }
        );
        let total = getpaymentsArray.reduce((a, b) => a + b, 0);
        return total;
      };

      const payments = () => {
        const paymentsData = this.props.allProjectInfo.project.employerPayments;

        let getPayments = paymentsData.map(data => {
          return <p>{data.$numberDecimal}</p>;
        });
        const getPaymentsFiltered = getPayments.filter(data => {
          return data.props.children !== "0";
        });
        return <div>{getPaymentsFiltered}</div>;
      };

      return (
        <Card className="shadow border-0">
          <CardHeader className=" pb-2">
            <Nav className="card-header-pills" pills>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Micsellaneous
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Payment
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink >
              <MaterialDialog project={this.props.allProjectInfo.project}/>
              </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <CardBody>
                <h3 className="card-title section-title-bold">Miscellaneous</h3>
                <CardText>{miscellaneous()}</CardText>
                <CardText>
                  <span className="section-title-bold">Total</span>
                  <span className="float-right total-miscellaneous">
                    ${getMiscellaneousTotal()}
                  </span>{" "}
                </CardText>
              </CardBody>
            </TabPane>

            <TabPane tabId="2">
              <CardBody>
                <h3 className="card-title section-title-bold">Payment</h3>
                <CardText>
                  <PaymentModal project={this.props.allProjectInfo.project} />
                  <CardText className="alignCenter">{payments()}</CardText>
                  <CardText>
                    <span className="section-title-bold">Total</span>
                    <span className="float-right total-miscellaneous">
                      ${getpaymentsTotal()}
                    </span>
                  </CardText>
                </CardText>
              </CardBody>
            </TabPane>
            <TabPane tabId="3">
            
           </TabPane>
          </TabContent>
        </Card>
      );
    }
  }
}
const  mapStateToProps = (state) => {
  return {
    project: state.usersWithQuotes.projectData
  }
}
export default connect(mapStateToProps,{getUserWithQuoteAction})(PillsTabCards);

