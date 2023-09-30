import { loginActions } from "./login";
import { uiAction } from "./ui";

export const signup = (user) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("User Not Found");
      }

      const userData = response.json();
      return userData;
    };

    try {
      const userData = await fetchData();
      dispatch(loginActions.loggedUser(userData));
      dispatch(loginActions.login());
      localStorage.setItem("user", userData);
      localStorage.setItem("isActive", true);
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const fetchUser = async () => {
      const response = await fetch(
        `http://localhost:8080/users/${email}/${password}`
      );

      if (!response.ok) {
        throw new Error("User Not Found");
      }

      const userData = await response.text();

      return userData;
    };

    try {
      const user = await fetchUser();

      if (user) {
        dispatch(loginActions.loggedUser(JSON.parse(user)));
        dispatch(loginActions.login());
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isActive", true);
        dispatch(
          uiAction.showNotification({
            title: "Welcome Broooo",
            status: "success",
            message: "Start Shopping",
          })
        );
      } else {
        dispatch(
          uiAction.showNotification({
            title: "User Not Found",
            status: "error",
            message: "If you are new Signup first",
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};
