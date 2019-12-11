import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { loadUsersP } from "../../../../../../actions/User";
import { selectingClientP } from "../../../../../../actions/Project";
import Modal from "./Modal";
import TableHead from "@material-ui/core/TableHead";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import "../index.css";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? (
            <i className="zmdi zmdi-skip-next" />
          ) : (
            <i className="zmdi zmdi-skip-previous" />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <i className="zmdi zmdi-chevron-right" />
          ) : (
            <i className="zmdi zmdi-chevron-left" />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <i className="zmdi zmdi-chevron-left" />
          ) : (
            <i className="zmdi zmdi-chevron-right" />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? (
            <i className="zmdi zmdi-skip-previous" />
          ) : (
            <i className="zmdi zmdi-skip-next" />
          )}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

let counter = 0;

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class ProjectsTable extends React.Component {
  componentDidMount() {
    this.props.loadUsersP();
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      page: 0,
      rowsPerPage: 10
    };
  }

  projectsArray = users => {
    const projects = [];
    if (users) {
      users.map(user => {
        if (user.project) {
          user.project.map(project => {
            if (project.state === "Estimated") {
              projects.push({
                _id: project._id,
                name: user.name,
                phone: user.phone,
                address: project.address,
                estimatedPrice: project.estimatedPrice,
                createdAt: project.createdAt
              });
            }
          });
        }
      });
    }

    projects.sort(function(a, b) {
      a = new Date(a.createdAt);
      b = new Date(b.createdAt);
      return a > b ? -1 : a < b ? 1 : 0;
    });

    return projects;
  };

  totalPrice = Pricearray => {
    let total = 0;
    if (Pricearray) {
      const getArrayOfPrice = Pricearray.map(price => {
        return parseInt(price.$numberDecimal);
      });
      total = getArrayOfPrice.reduce((a, b) => a + b, 0);
    }
    return total;
  };

  render() {
    const { classes } = this.props;
    const { rowsPerPage, page } = this.state;
    const data = this.projectsArray(this.props.users);
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, data ? data.length : 0 - page * rowsPerPage);

    return (
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Submited Date</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ? data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => {
                    return (
                      <TableRow key={n._id}>
                        <TableCell>{n.name}</TableCell>
                        <TableCell>{n.phone}</TableCell>
                        <TableCell>{n.address}</TableCell>
                        <TableCell>
                          ${this.totalPrice(n.estimatedPrice)}
                        </TableCell>
                        <TableCell>
                          <Moment format="YYYY/MM/DD">{n.createdAt}</Moment>
                        </TableCell>

                        <TableCell className="iconsColumn" align="right">
                          <Modal confirm={{ _id: n._id }} />
                        </TableCell>
                        <TableCell className="iconsColumn" align="right">
                          <Modal cancel={{ _id: n._id }} />
                        </TableCell>
                      </TableRow>
                    );
                  })
              : ""}
            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={7} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={7}
                count={data ? data.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActionsWrapped}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

ProjectsTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = ({ user }) => {
  const { users, _id } = user;
  return { users, _id };
};
export default withRouter(
  connect(mapStateToProps, { loadUsersP, selectingClientP })(
    withStyles(styles)(ProjectsTable)
  )
);
