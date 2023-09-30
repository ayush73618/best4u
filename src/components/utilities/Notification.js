import { useDispatch } from "react-redux";
import classes from "./Notification.module.css";
import { useEffect } from "react";
import { uiAction } from "../Store/ui";

const Notification = (props) => {
  const { title, status, message } = props;
  let extraClasses;
  let icon;
  if (status === "success") {
    extraClasses = classes.success;
    icon = "fa-solid fa-check fa-2x";
  }
  if (status === "error") {
    extraClasses = classes.error;
    icon = "fa-solid fa-triangle-exclamation fa-2x";
  }
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(uiAction.removeNotification());
      console.log("Notification Service Running");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch]);
  return (
    <>
      <div className={classes.showArrow}></div>
      <div className={`${classes.notify} ${extraClasses}`}>
        <div className={classes.notificationIcon}>
          <i className={icon}></i>
        </div>
        <div>
          <p className={classes.title}>{title}</p>
          <p className={classes.message}>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Notification;
