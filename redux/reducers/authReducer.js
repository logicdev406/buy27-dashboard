import * as t from "../types";

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case t.LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
        user: {},
      };
    case t.LOGIN_SUCCESS:
      return {
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case t.LOGOUT:
    case t.LOGIN_FAIL:
      // localStorage.removeItem("token");
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

export const getUsersCount = (state = { count: "" }, action) => {
  switch (action.type) {
    case t.GET_USERS_COUNT_REQUEST:
      return {
        loading: true,
        count: "",
      };
    case t.GET_USERS_COUNT_SUCCESS:
      return {
        loading: false,
        count: action.payload,
      };
    case t.GET_USERS_COUNT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getUsers = (state = { users: [] }, action) => {
  switch (action.type) {
    case t.GET_USERS_REQUEST:
      return {
        loading: true,
        users: [],
      };
    case t.GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case t.GET_USERS_FAIL:
      return {
        loading: false,
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
