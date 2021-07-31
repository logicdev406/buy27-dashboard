import * as t from "../types";

const authReducer = (state = { user: {} }, action) => {
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
    case t.LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case t.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        data: action.payload,
        isAuthenticated: true,
        loading: false,
      };
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
    case t.UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case t.UPDATE_PROFILE_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        loading: false,
        user: action.payload,
      };
    case t.UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case t.LOGOUT:
    case t.USER_FAIL:
    case t.LOGIN_FAIL:
    case t.SIGNUP_FAIL:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
