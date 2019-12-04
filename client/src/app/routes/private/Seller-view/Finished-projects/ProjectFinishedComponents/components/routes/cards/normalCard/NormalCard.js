import React from 'react';
import {Card, CardBody,CardHeader, CardText,} from 'reactstrap';
import Moment from "react-moment";
import "moment-timezone";
const NormalCard = (props,{cardStyle}) => {
  
 if(!props.allProjectInfo.project){
   return <div></div>
  }else{
    const projectData = props.allProjectInfo.project
  return (
    <Card className={`shadow border-0 ${cardStyle}`}>
    <h1 className="address">Address </h1>
      
      <CardBody>
        <CardText>
         <p> Address: {projectData.address}</p>
         Requested on <Moment format="YYYY/MM/DD">{projectData.createdAt}</Moment>
        </CardText>
      </CardBody>
    </Card>
  );
  }
};
export default NormalCard;