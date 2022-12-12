import Reducer, { useReducer, useEffect, useRef } from 'react';
import classes from './StopWatch.module.css';

const initialState = {
  type: 'stop',
  isRunning: false,
  time: 0,
  name: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, isRunning: true };
    case 'stop':
      return { ...state, isRunning: false };
    case 'reset':
      return { isRunning: false, time: 0 };
    case 'tick':
      return { ...state, time: state.time + 1 };
    case 'sayHello':
      console.log(action.name);
      return { ...state, isRunning: false };
    default:
      throw new Error();
  }
};

const StopWatch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div className={classes}>
      {state.time}s
      <div>
        <button onClick={() => dispatch({ type: 'start' })}>Start</button>
        <button onClick={() => dispatch({ type: 'stop' })}>Stop</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'sayHello', name: 'Elrod' })}>
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
