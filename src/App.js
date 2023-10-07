import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import Navbar from "./components/Navbar/Navbar";
import { useSelector } from "react-redux";
import Notification from "./components/utilities/Notification";
import Footer from "./components/utilities/Footer";

function App() {
  const showLoginModal = useSelector(
    (state) => state.loginReducer.showLoginModal
  );
  const showSignUpModal = useSelector(
    (state) => state.loginReducer.showSignUpModal
  );

  const notification = useSelector((state) => state.uiReducer.notification);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Navbar />
      {showLoginModal && <Login />}
      {showSignUpModal && <SignUp />}
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
