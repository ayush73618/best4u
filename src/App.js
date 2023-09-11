import './App.css';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Navbar from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';

function App() {
  const showLoginModal = useSelector(state=>state.loginReducer.showLoginModal);
  const showSignUpModal = useSelector(state=>state.loginReducer.showSignUpModal); 
  return (
    <>
    <Navbar/>
    {showLoginModal && <Login/>}
    {showSignUpModal && <SignUp/>}
    <HomePage/>
    </>
  );
}

export default App;
