import './App.css';
import AlertDismissible from './Alerts/AlertDismissable';
import GetByRole from './GetByRole/GetByRole';
import RegisterForm from './Forms/RegisterForm';
import StopWatch from './Reducers/StopWatch';
import Form from './Reducers/Form';

function App() {
  const buttonText = 'Submit it';
  return (
    <>
      <Form />
      {/*<StopWatch />*/}
      {/*<RegisterForm buttonText={buttonText} />*/}
      {/*<AlertDismissible />*/}
      {/*<GetByRole />*/}
    </>
  );
}

export default App;
