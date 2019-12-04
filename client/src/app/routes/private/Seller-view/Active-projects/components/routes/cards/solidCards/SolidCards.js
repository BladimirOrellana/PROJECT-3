import React from "react";
import { Card, CardBody, CardSubtitle, CardText } from "reactstrap";
import "./../../../../index.css";
const SolidCards = (props, { headerText, cardStyle }) => {
  if (!props.allProjectInfo.project) {
    return <div></div>;
  } else {
    const project = props.allProjectInfo.project;
    //PROJECT COST
    const getprojectCost = () => {
      const getArrayOfPrice = project.estimatedPrice.map(price => {
        return parseInt(price.$numberDecimal);
      });
      let total = getArrayOfPrice.reduce((a, b) => a + b, 0);
      return total;
    };

    //PROJECT NUMBER OF SIDES
    const getNumberOfSides = () => {
      const sideCost = project.estimatedPrice.map(price => {
        return parseInt(price.$numberDecimal);
      });
      let numberOfSides = project.sides.map((side, i) => {
        
        const getGates = () => {
          if (side.gates.length > 0) {
            let gates = side.gates.map(gate => {
            
              return (
                <p id={gate._id}>
                  Type: <span className="text-muted"> {gate.type}</span> Size:
                  <span className="text-muted"> {gate.size}ft</span>
                </p>
              );
            });

            return gates;
          } else {
            return <span className="text-muted">No Gates</span>;
          }
        };
        return (
          <Card id={side._id} className={`shadow border-0 ${cardStyle}`}>
            <CardBody className="">
              <h4>{headerText}</h4>
              <h1 className="text-center">{side.description}</h1>
              <CardSubtitle className="text-black">
                Wood: <span className="text-muted">{side.woodType}</span>
              </CardSubtitle>
              <CardSubtitle className="text-black">
                Length:{" "}
                <span className="text-muted">
                  {side.length.$numberDecimal}ft
                </span>
              </CardSubtitle>
              <h1 className="card-title">{"Gates"}</h1>
              <CardSubtitle className="text-black">
                <span>{getGates()}</span>
              </CardSubtitle>

              <CardText></CardText>
            </CardBody>
            <CardBody className="">
            <h1>Cost ${sideCost[i]}</h1>
            </CardBody>

          </Card>
        );
      });
      return numberOfSides;
    };
    return <div>
    {getNumberOfSides()}
    <Card className={`shadow border-0 ${cardStyle}`}>
    <CardBody className="">
    <h1>Total ${getprojectCost()}</h1>
    </CardBody>

  </Card>
    </div>;
  }
};
export default SolidCards;
