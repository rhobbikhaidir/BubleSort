import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import "./index.css";
import ActionType from "../../Redux/reducer/actionType";

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
      dispatch({ type: ActionType.CHANGE_NUMBER, newNumber: kosong }),
    handleGenerate: (arr) =>
      dispatch({ type: ActionType.GENERATE_NUMBER, newArray: arr }),
    handleBubbleArr: (newBubbleArr) =>
      dispatch({ type: ActionType.BUBBLE_ARR, bubbleArr: newBubbleArr }),
  };
};

const UserInput = (props) => {
  const [showBtn, setShowBtn] = useState(true);

  const navigate = useNavigate();
  const changeNumber = (e) => {
    props.handleChangeNumber(e.target.value);
    console.log();
  };

  const handleClick = (e) => {
    e.preventDefault();
    let arr1 = [];
    if (props.randomNumber > 0) {
      for (let i = 0; i < props.randomNumber; i++) {
        arr1.push(Math.floor(Math.random() * 10) + 1);
      }
      // console.log(props.randomNumber);
      props.handleGenerate(arr1);
      setShowBtn(false);
    }
  };

  const handleBubleSort = () => {
    let i, j;
    const len = props.arrayNumber.length;

    let arr = props.arrayNumber;
    for (i = 0; i < len; i++) {
      for (j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          props.handleBubbleArr(arr);
        }
      }
    }

    console.log(props.arrayNumber);
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
          {props.arrayNumber.length > 1
            ? props.arrayNumber.map((data, index) => {
                return <p key={index}>{data}</p>;
              })
            : ""}
        </div>
        <input
          type="number"
          placeholder="Random number"
          name="title"
          value={props.randomNumber}
          onChange={changeNumber}
        />
        <div className="btn-wrapper">
          <button
            className={showBtn ? "btn-disable" : "btn-submit-num"}
            onClick={handleBubleSort}
            disabled={showBtn}
          >
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
