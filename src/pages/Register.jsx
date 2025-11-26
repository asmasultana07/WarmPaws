import { Link } from "react-router";
import React from "react";

const Register = () => {
  return ( 
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
         
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">First Name</label>
                <input type="name" className="input" placeholder="Your First Name" />
                <label className="label">Last Name</label>
                <input type="name" className="input" placeholder="Your Last Name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Your Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <div>
                    <span>Already Have an Account? </span>
                    <Link to="/login" className="font-bold text-blue-800"> Login</Link> 
                    
                </div>
                <button className="btn btn-primary text-[16px] mt-4">Register</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Register;