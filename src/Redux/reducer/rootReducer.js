import ActionType from "./actionType";

const globalState = {
  randomNumber: 0,
  arrayNumber: [],
};
const rootReducer = (state = globalState, action) => {
  if (action.type === ActionType.CHANGE_NUMBER) {
    return {
      ...state,
      randomNumber: action.newNumber,
    };
  }

  if (action.type === ActionType.GENERATE_NUMBER) {
    return {
      ...state,
      arrayNumber: action.newArray,
      randomNumber: 0,
    };
  }
  if (action.type === ActionType.BUBBLE_ARR) {
    return {
      ...state,
      arrayNumber: action.bubbleArr,
    };
  }
  if (action.type === ActionType.RESET_STATE) {
    return {
      randomNumber: 0,
      arrayNumber: [],
    };
  }
  return state;
};

export default rootReducer;
