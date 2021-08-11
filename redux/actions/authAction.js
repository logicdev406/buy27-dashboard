import * as t from "../types";
import setAuthToken from "../../helper/setAuthToken";
import axios from "axios";

const Api = process.env.DB_LOCAL_HOST;

export const signUp = (formData) => async (dispatch) => {
  try {
    dispatch({ type: t.SIGNUP_REQUEST });

    const { data } = await axios.post(
      `localhost:3000/api/users/register`,
      formData
    );

    dispatch({
      type: t.SIGNUP_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: t.LOGIN_REQUEST });

    const { data } = await axios.post(
      "https://backend.buy27.ng/api/users/login",
      formData
    );

    dispatch({
      type: t.LOGIN_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    dispatch({ type: t.USER_REQUEST });

    const { data } = await axios.get(`localhost:3000/api/users/me`);

    dispatch({
      type: t.USER_LOADED,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UpdateProfile = (formData) => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      //add token from cookies
    }
    dispatch({ type: t.UPDATE_PROFILE_REQUEST });

    const { data } = await axios.put(
      `localhost:3000/api/users/update`,
      formData
    );

    dispatch({
      type: t.UPDATE_PROFILE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUsersCount = (token) => async (dispatch) => {
  try {
    if (token) {
      setAuthToken(token);
    }
    dispatch({ type: t.GET_USERS_COUNT_REQUEST });

    const { data } = await axios.get(
      "https://backend.buy27.ng/api/users/get/count"
    );

    dispatch({
      type: t.GET_USERS_COUNT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.GET_USERS_COUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUsers = (token) => async (dispatch) => {
  try {
    if (token) {
      setAuthToken(token);
    }
    dispatch({ type: t.GET_USERS_REQUEST });

    const { data } = await axios.get("https://backend.buy27.ng/api/users");

    dispatch({
      type: t.GET_USERS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: t.GET_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: t.LOGOUT });
};
