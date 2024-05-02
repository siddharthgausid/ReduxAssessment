import { combineReducers } from 'redux';
import { SUBMIT_FORM } from './actions';

// Initial state for form values
const initialFormState = {
  formValues: [],
};

// Reducer to handle form submissions
const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
        /*console.log ({
            ...state,
            formValues: [...state.formValues, action.payload],
          });*/
      return {
        ...state,
        formValues: [...state.formValues, action.payload],
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  form: formReducer, // Using 'form' as the key for the form reducer
});

export default rootReducer;
