import './App.css';
import AlertDismissible from './Alerts/AlertDismissable';
import GetByRole from './GetByRole/GetByRole';
import RegisterForm from './Forms/RegisterForm';

function App() {
  const buttonText = 'Submit it';
  return (
    <>
      <RegisterForm buttonText={buttonText} />
      {/*<AlertDismissible />*/}
      {/*<GetByRole />*/}
    </>
  );
}

export default App;
