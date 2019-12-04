import React from 'react';
import {Card, CardBody, CardHeader, CardSubtitle, CardText} from 'reactstrap';
import Button from '@material-ui/core/Button';
import './../../../../index.css';

const HeaderCard = (props) => {
  const user = props.allProjectInfo.user
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
       <a href={"tel:" + user.phone}> <button  className="btn  btn-block text-black">Call {user.phone}</button></a>
      </CardBody>
    </Card>
  );
};
export default HeaderCard;