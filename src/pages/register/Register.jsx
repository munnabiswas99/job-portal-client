import Lottie from "lottie-react";
import React, { use } from "react";
import registerAnimation from "../../assets/lotties/register.json";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Register = () => {
    const {createUser} = use(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={registerAnimation}
            loop={true}
            style={{ width: "500px" }}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">SignUp Now!</h1>
            <form onSubmit={handleSignUp}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email"/>
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
                <button className="btn btn-neutral mt-4">SignUp</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
