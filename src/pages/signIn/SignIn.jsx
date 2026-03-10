import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lotties/Login.json";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            style={{ width: "500px" }}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">SignIn Now!</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <hr className="my-3"></hr>
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
