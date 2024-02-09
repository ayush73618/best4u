import React from "react";
import { useSelector } from "react-redux";
import Notification from "../utilities/Notification";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../utilities/Footer";

const Root = () => {
  // const showLoginModal = useSelector(
  //   (state) => state.loginReducer.showLoginModal
  // );
  // const showSignUpModal = useSelector(
  //   (state) => state.loginReducer.showSignUpModal
  // );

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

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
