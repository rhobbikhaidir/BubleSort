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
  return state;
};

export default rootReducer;
