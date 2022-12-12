import React, { useReducer } from 'react';

import formReducer from './formReducer';

const initialFormState = {
  username: '',
  email: '',
  password: '',
  hasConsented: false,
};

const Form = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const handleTextChange = (e) => {
    dispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={formHandler}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={(e) => handleTextChange(e)}
        />
      </label>
      <label>
        Consent to terms and conditions:
        <input
          type="checkbox"
          checked={formState.hasConsented}
          onChange={() => dispatch({ type: 'TOGGLE_CONSENT' })}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
