import React from 'react';
import {Card, CardBody,CardText} from 'reactstrap';
import Button from '@material-ui/core/Button';
import './../../../../index.css';

const HeaderCard = (props) => {
  const user = props.allProjectInfo.user
  console.log("USER EMAIL", props.allProjectInfo.user)
  return (
    <Card className="shadow border-0 cardComponent">
      <h1 className="cardComponentHeader">Client Infomation</h1>
      <CardBody>
        <h2 className="card-title">{user.name}</h2>
        <CardText>
        {user.phone}
         </CardText>
        <CardText>
        {user.email}
         </CardText>
       </CardBody>
    </Card>
  );
};
export default HeaderCard;