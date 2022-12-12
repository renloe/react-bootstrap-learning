import './App.css';
import AlertDismissible from './Alerts/AlertDismissable';
import GetByRole from './GetByRole/GetByRole';
import RegisterForm from './Forms/RegisterForm';
import StopWatch from './Reducers/StopWatch';

function App() {
  const buttonText = 'Submit it';
  return (
    <>
      <StopWatch />
      {/*<RegisterForm buttonText={buttonText} />*/}
      {/*<AlertDismissible />*/}
      {/*<GetByRole />*/}
    </>
  );
}

export default App;
