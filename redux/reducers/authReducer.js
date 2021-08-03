import * as t from "../types";
import { useCookies } from "react-cookie";

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case t.LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case t.LOGIN_SUCCESS:
      const [cookie, setCookie] = useCookies(["token"]);
      setCookie("token", JSON.stringify(action.payload.token), {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      });
      return {
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case t.LOGOUT:
    case t.LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        token: "",
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const signUpReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case t.SIGNUP_REQUEST:
      return {
        loading: true,
      };
    case t.SIGNUP_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case t.SIGNUP_FAIL:
      return {
        loading: false,
        user: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loadUserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case t.USER_REQUEST:
      return {
        isAuthenticated: false,
      };
    case t.USER_LOADED:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case t.USER_FAIL:
      localStorage.removeItem("user");
      return {
        isAuthenticated: false,
        loading: false,
        user: "",
        error: action.payload,
      };
    default:
      return state;
  }
};
