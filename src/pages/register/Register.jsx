import Lottie from "lottie-react";
import React, { use } from "react";
import registerAnimation from "../../assets/lotties/register.json";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { NavLink } from "react-router";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {
        form.reset();
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
            animationData={registerAnimation}
            loop={true}
            className="w-full"
          />
        </div>

        {/* Form */}
        <div className="w-full max-w-md bg-base-100 shadow-2xl rounded-2xl p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Create Account
          </h1>

          <form onSubmit={handleSignUp} className="space-y-4">
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
                placeholder="Create a password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full rounded-full mt-2">
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-xs sm:text-sm">OR</div>

          {/* Optional Social Login */}
          {/* <SocialLogin /> */}

          {/* Login Redirect */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <NavLink to="/signIn">
              {" "}
              <span className="link link-primary cursor-pointer">Login</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
