import React from "react";
import BasicTable from "./basic/BasicTable";
import CardBox from "components/CardBox/index";

const Tables = props => {
  console.log("INDEX", props.quoteDetails);
  return (
    <div className="animated slideInUpTiny animation-duration-3">
      <div className="row ">
        <CardBox styleName="col-12" cardStyle="p-0" headerOutside>
          <BasicTable quoteDetails={props.quoteDetails} />
        </CardBox>
      </div>
    </div>
  );
};

export default Tables;
