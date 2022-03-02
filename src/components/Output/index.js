import React from "react";
import { connect } from "react-redux";
import "./index.css";

const mapStateToProps = (state) => {
  return {
    arrayNumber: state.arrayNumber,
  };
};

const Output = (props) => {
  console.log(props);
  return (
    <div className="container-output">
      {props.arrayNumber &&
        props.arrayNumber.map((data, index) => (
          <p className="card-output" key={index}>
            {data}
          </p>
        ))}
    </div>
  );
};

export default connect(mapStateToProps)(Output);
