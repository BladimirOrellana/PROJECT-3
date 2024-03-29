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
import "./index.css";
import { connect } from "react-redux";
import {
  loadRawMaterials,
  onBlurEmptying
} from "../../../../../../actions/RawMaterialsAction";
import MaterialsModal from "./MaterialsModal";
import { withRouter } from "react-router-dom";

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

class UsersTable extends React.Component {
  componentWillMount() {
    this.props.loadRawMaterials();
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
      rowsPerPage: 8
    };
  }
  render() {
    const { classes } = this.props;
    const { rowsPerPage, page } = this.state;
    const data = this.props.materialItemList;
    const emptyRows =
      rowsPerPage -
      Math.min(rowsPerPage, data ? data.length : 0 - page * rowsPerPage);

    return (
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableBody
            onClick={e => {
              e.preventDefault();
              this.props.onBlurEmptying();
            }}
          >
            {data
              ? data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => {
                    return (
                      <TableRow key={n._id}>
                        <TableCell>{n.materialItem}</TableCell>

                        <TableCell id="iconsColumn" align="right">
                          <MaterialsModal edit={{ material: n }} />
                        </TableCell>
                        <TableCell id="iconsColumn" align="right">
                          <MaterialsModal delete={{ material: n }} />
                        </TableCell>
                      </TableRow>
                    );
                  })
              : ""}
            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={3}
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

UsersTable.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = ({ user, rawMaterials }) => {
  const { materialItemList } = rawMaterials;
  const { selected, users, _id } = user;
  return { selected, users, _id, materialItemList };
};
export default withRouter(
  connect(mapStateToProps, {
    loadRawMaterials,
    onBlurEmptying
  })(withStyles(styles)(UsersTable))
);
