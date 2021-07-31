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

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: t.LOGIN_REQUEST });

    const { data } = await axios.post(
      `backend.buy27.ng/api/users/login`,
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

export const logout = () => async (dispatch) => {
  dispatch({ type: t.LOGOUT });
};
