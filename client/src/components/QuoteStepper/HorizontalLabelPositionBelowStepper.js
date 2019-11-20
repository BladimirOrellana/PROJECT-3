import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import IntlMessages from "util/IntlMessages";
import "./index.css";
import MenuItem from "@material-ui/core/MenuItem";
import CardBox from "components/CardBox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0,
    sidesNumber: 1,
    address: "",
    fenceSidesInfo: [
      {
        description: "",
        length: 0,
        woodType: "Cyder",
        gates: []
      }
    ]
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    if (name === "sidesNumber") {
      if (value <= 10) {
        const sidesInfo = [];
        for (let i = 0; i < value; i++) {
          sidesInfo.push({
            description: "",
            length: 0,
            woodType: "Cyder",
            gates: []
          });
        }

        this.setState({
          [name]: value,
          fenceSidesInfo: sidesInfo
        });
      }
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  getSteps = sidesNumber => {
    const stepsarray = ["Fence Information"];
    for (let i = 0; i < sidesNumber; i++) {
      stepsarray.push(`Side #${i + 1} Information`);
    }
    stepsarray.push("Your Quote");

    return stepsarray;
  };

  getStepContent = (stepIndex, sidesNumber) => {
    switch (true) {
      case stepIndex === 0: //project info
        return this.getProjectInformation();
      case stepIndex <= sidesNumber: //all sides
        return this.getFenceSidesInformation(stepIndex);

      default:
        return this.getQuote();
    }
  };

  getProjectInformation = () => {
    return (
      <div id="formStep1">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-8">
            <div className="form-group">
              <TextField
                id="address"
                name="address"
                // label="Address"
                helperText="Address"
                value={this.state.address}
                required
                onChange={this.handleInputChange}
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <TextField
                id="sidesNumber"
                name="sidesNumber"
                // label="Introduce The Amount Of Sides"
                value={this.state.sidesNumber}
                onChange={this.handleInputChange}
                type="number"
                helperText="Introduce The Amount Of Sides"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                fullWidth
              />
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  };

  handleInputChangeToArray = event => {
    const { name, value } = event.target;
    if (name === "gates") {
      if (value <= 5) {
        const gatesInfo = [];
        for (let i = 0; i < value; i++) {
          gatesInfo.push({
            size: 0,
            type: "Single"
          });
        }

        const fenceSidesInfo = [...this.state.fenceSidesInfo];
        fenceSidesInfo[this.state.activeStep - 1].gates = gatesInfo;

        this.setState({
          fenceSidesInfo: fenceSidesInfo
        });
      }
    } else {
      const fenceSidesInfo = [];
      for (let i = 0; i < this.state.fenceSidesInfo.length; i++) {
        if (i === this.state.activeStep - 1) {
          fenceSidesInfo.push({
            ...this.state.fenceSidesInfo[i],
            [name]: value
          });
        } else {
          fenceSidesInfo.push(this.state.fenceSidesInfo[i]);
        }
      }
      this.setState({
        fenceSidesInfo: fenceSidesInfo
      });
    }
  };

  getFenceSidesInformation = stepIndex => {
    const woods = ["Cyder", "Pine"];

    return (
      <div id="formStep1">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4 col-sm-12">
            <div className="form-group">
              <TextField
                id="description"
                name="description"
                helperText={
                  "Please Enter A Description For The Side #" +
                  this.state.activeStep
                }
                required
                value={this.state.fenceSidesInfo[stepIndex - 1].description}
                onChange={this.handleInputChangeToArray}
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
          </div>

          <div className="col-md-2 col-sm-4">
            <div className="form-group">
              <TextField
                id="length"
                name="length"
                value={this.state.fenceSidesInfo[stepIndex - 1].length}
                onChange={this.handleInputChangeToArray}
                type="number"
                helperText="Introduce The Side Length"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                fullWidth
                required
              />
            </div>
          </div>

          <div className="col-md-2 col-sm-4">
            <div className="form-group">
              <TextField
                id="woodType"
                select
                name="woodType"
                value={this.state.fenceSidesInfo[stepIndex - 1].woodType}
                onChange={this.handleInputChangeToArray}
                SelectProps={{}}
                helperText="Choose A Wood Type"
                margin="normal"
                fullWidth
              >
                {woods.map(value => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="form-group">
              <TextField
                id="gates"
                name="gates"
                value={this.state.fenceSidesInfo[stepIndex - 1].gates.length}
                onChange={this.handleInputChangeToArray}
                type="number"
                helperText="Gates Amount Per Side"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                fullWidth
              />
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row" id="gatesCard">
          <div className="col-md-4 col-sm-0"></div>
          {this.getGatesInformation()}
        </div>
      </div>
    );
  };

  handleInputChangeToGatesArray = (event, gateIndex) => {
    const { name, value } = event.target;

    console.log("?????????????????????? " + gateIndex);////////////////////////////
    const fenceSidesInfo = [];
    for (let i = 0; i < this.state.fenceSidesInfo.length; i++) {
      if (i === this.state.activeStep - 1) {
        const gatesInfo = [];
        for (
          let j = 0;
          j < this.state.fenceSidesInfo[this.state.activeStep - 1].gates.length;
          j++
        ) {
          if (j == gateIndex) {
            // console.log("!!!!!!!!!!!!!!!!!!!!!! " + id);///////////////////
            gatesInfo.push({
              ...this.state.fenceSidesInfo[this.state.activeStep - 1].gates[j],
              [name]: value
            });
          } else {
            gatesInfo.push(
              this.state.fenceSidesInfo[this.state.activeStep - 1].gates[j]
            );
          }
        }

        fenceSidesInfo.push({
          ...this.state.fenceSidesInfo[i],
          gates: gatesInfo
        });
      } else {
        fenceSidesInfo.push(this.state.fenceSidesInfo[i]);
      }
    }
    this.setState({
      fenceSidesInfo: fenceSidesInfo
    });
  };

  listElem = gateIndex => {
    return (
      <li key={gateIndex}>
        <div className="row gatelist">
          <div className="col-md-3 col-sm-2">
            <h3 id="h4GateNumber">Gate #{gateIndex + 1}</h3>
          </div>
          <div className="col-md-4 col-sm-5">
            <div className="form-group">
              <TextField
                name="size"
                id={gateIndex}
                value={
                  this.state.fenceSidesInfo[this.state.activeStep - 1].gates[
                    gateIndex
                  ].size
                }
                onChange={(e)=> {this.handleInputChangeToGatesArray(e, gateIndex)}}
                type="number"
                helperText="Gate Length"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                fullWidth
                required
              />
            </div>
          </div>

          {/* <div className="col-md-5 col-sm-5">
            <div className="form-group">
              <TextField
                id={gateIndex}
                select
                name="type"
                value={
                  this.state.fenceSidesInfo[this.state.activeStep - 1].gates[
                    gateIndex
                  ].type
                }
                onChange={this.handleInputChangeToGatesArray}
                SelectProps={{}}
                helperText="Choose A Gate Type"
                margin="normal"
                fullWidth
              >
                <MenuItem key="Single" value="Single">
                  Single
                </MenuItem>
                <MenuItem key="Double" value="Double">
                  Double
                </MenuItem>
              </TextField>
            </div>
          </div> */}

          <div className="col-md-5 col-sm-5">
            <FormControl component="fieldset" required>
              <RadioGroup
                id={gateIndex}
                className="d-flex flex-row"
                aria-label="gateType"
                name="type"
                value={
                  this.state.fenceSidesInfo[this.state.activeStep - 1].gates[
                    gateIndex
                  ].type
                }
                onChange={(e)=> {this.handleInputChangeToGatesArray(e, gateIndex)}}
              >
                <FormControlLabel
                  value="Single"
                  control={<Radio />}
                  label="Single"
                />
                <FormControlLabel
                  value="Double"
                  control={<Radio />}
                  label="Double"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </li>
    );
  };

  getGatesInformation = () => {
    const gatesArray = this.state.fenceSidesInfo[this.state.activeStep - 1]
      .gates;
    let gateIndex = -1;
    return this.state.fenceSidesInfo[this.state.activeStep - 1].gates.length >
      0 ? (
      <CardBox styleName=" col-md-7 col-sm-12 ">
        <List
          subheader={
            <ListSubheader className="position-static">
              <h3 className="title text-primary">Gates Information</h3>
            </ListSubheader>
          }
        >
          {gatesArray.map(gate => {
            gateIndex += 1;
            return this.listElem(gateIndex);
          })}
        </List>
      </CardBox>
    ) : (
      ""
    );
  };

  getQuote = () => {
    return (
      <div className="tab-pane" id="tab2-4">
        <h3 className="title text-primary">Terms and Conditions</h3>
        <p>
          <strong>Lorem</strong> Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
        <div className="d-flex align-items-center">
          <Checkbox color="primary" />{" "}
          <span>I agree with the Terms and Conditions.</span>
        </div>
      </div>
    );
  };

  render() {
    const { activeStep, sidesNumber } = this.state;
    const steps = this.getSteps(sidesNumber);

    return (
      <div className="w-100">
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className="horizontal-stepper-linear"
        >
          {steps.map((label, index) => {
            return (
              <Step
                key={label}
                className={`horizontal-stepper ${
                  index === activeStep ? "active" : ""
                }`}
              >
                <StepLabel className="stepperlabel">{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className="my-2">
                All steps completed - you&quot;re finished
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div id="contentdiv">
              {this.getStepContent(activeStep, sidesNumber)}
              <div id="nextBackButtonsDiv">
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className="mr-2"
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HorizontalLabelPositionBelowStepper;
