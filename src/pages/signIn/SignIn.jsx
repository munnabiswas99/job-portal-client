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
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 w-full max-w-6xl">

        {/* Animation */}
        <div className="w-full max-w-md">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            className="w-full"
          />
        </div>

        {/* Form */}
        <div className="w-full max-w-md bg-base-100 shadow-2xl rounded-2xl p-6 sm:p-8">

          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Welcome Back 👋
          </h1>

          <form onSubmit={handleSignIn} className="space-y-4">

            {/* Email */}
            <div>
              <label className="label text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label text-sm">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a className="text-sm link link-hover">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full rounded-full">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-xs sm:text-sm">OR</div>

          {/* Social Login */}
          <SocialLogin from={from} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;