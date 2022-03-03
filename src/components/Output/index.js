import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ActionType from "../../Redux/reducer/actionType";
import "./index.css";

const mapStateToProps = (state) => {
  return {
    arrayNumber: state.arrayNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleResetState: () => dispatch({ type: ActionType.RESET_STATE }),
  };
};

const Output = (props) => {
  const navigate = useNavigate();
  const handleTryAgain = (e) => {
    e.preventDefault();

    props.handleResetState();
    navigate("/");
  };
  console.log(props);
  return (
    <div className="wrapper">
      <p className="title-user-input">
        <i>Output</i>
      </p>
      <div className="card-container">
        {props.arrayNumber.length === 0 ? (
          <p className="title-user-input">Please Enter Number Before</p>
        ) : (
          <div className="container-output">
            {props.arrayNumber &&
              props.arrayNumber.map((data, index) => (
                <p className="card-output" key={index}>
                  {data}
                </p>
              ))}
          </div>
        )}

        <button className="btn-again" onClick={handleTryAgain}>
          {props.arrayNumber.length === 0 ? "Back" : "Try Again"}
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Output);
