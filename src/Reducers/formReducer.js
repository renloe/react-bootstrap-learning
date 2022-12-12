const formReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT_TEXT':
      return { ...state, [action.field]: action.payload };
    case 'TOGGLE_CONSENT':
      return { ...state, hasConsented: !state.hasConsented };
    default:
      return state;
  }
};

export default formReducer;
