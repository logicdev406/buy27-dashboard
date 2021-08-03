import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import validate from ".././helper/validator";
import { login } from "../redux/actions/authAction";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import buy27logo from "../assets/images/buy27logo.png";

const mapStateToProps = (state) => {
  return { user: state.login };
};

const mapDispatchToProps = {
  login,
};

const Login = (props) => {
  const { user, login } = props;
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  console.log(user);

  useEffect(() => {
    // const router = useRouter();
    // if (token) {
    //   router.push("/"); // redirects if there is no user
    // }
  }, []);

  const [errors, setErrors] = useState({});

  const [ShowPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setErrors(validate(values));
    if (
      values.email.length === 0 ||
      values.password.length === 0 ||
      values.password.length < 6
    ) {
      return null;
    }
    login(values);
  };

  const ToggleShowPassword = () => {
    setShowPassword(!ShowPassword);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-200">
      <a href="/">
        <img className="w-40 mb-8" src={buy27logo} alt="logo" id="buy27logo" />
      </a>
      <div className="flex flex-col items-center pt-4 pb-8 bg-white shadow-lg rounded">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Login</h1>
        <div className="border-b border-gray w-full my-2"></div>
        <div className="flex flex-col px-4 md:px-8 mt-2">
          <div className="text-sm text-primary-dark mb-2">
            <label htmlFor="email ">Email Address</label>
          </div>
          <input
            onChange={handleInput}
            type="email"
            name="email"
            value={values.email}
            placeholder="Enter Email Address"
            className="focus: outline-none bg-transparent border border-primary-dark rounded px-4 mb-1 h-10 md:h-12 w-72 md:w-96"
          />
          {errors.email && (
            <p className="text-red-500 text-sm ">{errors.email}</p>
          )}
          {user.error && (
            <p className="text-red-500 text-sm ">
              Incorrect E-mail or Password
            </p>
          )}
        </div>
        <div className="flex flex-col px-4 md:px-8 mt-8">
          <div className="flex justify-between text-sm text-primary-dark mb-2">
            <label htmlFor="password">Password</label>
            <a href="/forgotpassword" className="text-red-500 underline">
              Forget Password?
            </a>
          </div>
          <div className="flex items-center justify-between px-4 focus: outline-none bg-transparent border border-primary-dark rounded pl-4 mb-1  h-10 md:h-12 w-72 md:w-96">
            <input
              onChange={handleInput}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              type={ShowPassword === false ? "password" : "text"}
              name="password"
              value={values.password}
              placeholder="Enter Password"
              className="focus:outline-none w-80"
            />
            <button
              className="focus:outline-none"
              onClick={() => {
                ToggleShowPassword();
              }}
            >
              {ShowPassword === false ? (
                <VisibilityOffIcon className="text-primary-dark" />
              ) : (
                <VisibilityIcon className="text-primary-dark" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm ">{errors.password}</p>
          )}
          {user.error && (
            <p className="text-red-500 text-sm ">
              Incorrect E-mail or Password
            </p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="h-10 w-96 mt-8 mb-14 focus:outline-none bg-primary-dark hover:bg-primary-light text-white rounded"
        >
          {user.loading ? (
            <CircularProgress size={25} color="inherit" />
          ) : (
            "Login"
          )}
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
