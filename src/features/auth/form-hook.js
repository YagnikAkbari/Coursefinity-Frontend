import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formValidity,
      };
    default:
      return state;
  }
};

const useForm = (inititalInputs, initailValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: inititalInputs,
    isValid: initailValidity,
  });
  const inputHandler = useCallback((id, isValid, value) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputs, formValidity) => {
    dispatch({ type: "SET_DATA", inputs, formValidity });
  }, []);
  return [formState, inputHandler, setFormData];
};

export default useForm;
