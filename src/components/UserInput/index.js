import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import "./index.css";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    randomNumber: state.randomNumber,
    arrayNumber: state.arrayNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeNumber: (kosong) =>
      dispatch({ type: "CHANGE_NUMBER", newNumber: kosong }),
    handleGenerate: (arr) =>
      dispatch({ type: "GENERATE_NUMBER", newArray: arr }),
  };
};

const UserInput = (props) => {
  const navigate = useNavigate();
  const changeNumber = (e) => {
    props.handleChangeNumber(e.target.value);
    console.log();
  };

  const handleClick = (e) => {
    e.preventDefault();
    let arr1 = [];
    for (let i = 0; i < props.randomNumber; i++) {
      arr1.push(Math.floor(Math.random() * 10) + 1);
    }
    console.log(props.randomNumber);
    props.handleGenerate(arr1);
  };

  const handleBubleSort = () => {
    navigate("/output");
  };

  return (
    <div className="container-user-input">
      <p className="title-user-input">
        <i>Number Input</i>
      </p>
      <div className="form-user-input-post">
        <label htmlFor="title">Add length number of array</label>
        <div className="arrayNumber">
          {props.arrayNumber &&
            props.arrayNumber.map((data, index) => {
              return <p key={index}>{data}</p>;
            })}
        </div>
        <input
          type="number"
          placeholder="Random number"
          name="title"
          value={props.randomNumber}
          onChange={changeNumber}
        />
        <div className="btn-wrapper">
          <button className="btn-submit-num" onClick={handleBubleSort}>
            BUBLE SORT
          </button>
          <button className="btn-generate-num" onClick={handleClick}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
