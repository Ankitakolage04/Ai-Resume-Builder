import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="navbar shadow bg-base-100 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl font-bold text-primary">
            AI Resume Maker
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary btn-sm md:btn-md rounded-full px-6" onClick={() => setShowLogin(true)}>Login</button>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="modal-box relative">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setShowLogin(false)}>✕</button>
            <h3 className="font-bold text-2xl mb-6 text-center">Welcome Back</h3>

            <div className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" placeholder="email@example.com" className="input input-bordered w-full" />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Password</span></label>
                <input type="password" placeholder="********" className="input input-bordered w-full" />
                <label className="label"><a href="#" className="label-text-alt link link-hover">Forgot password?</a></label>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary w-full" onClick={() => { alert("Login Successful! (Demo)"); setShowLogin(false); }}>Login</button>
              </div>

              <div className="divider">OR</div>

              <div className="space-y-2">
                <button className="btn btn-outline w-full gap-2" onClick={() => { alert("Google Login (Demo)"); setShowLogin(false); }}><FaGoogle /> Continue with Google</button>
                <button className="btn btn-outline w-full gap-2" onClick={() => { alert("GitHub Login (Demo)"); setShowLogin(false); }}><FaGithub /> Continue with GitHub</button>
              </div>
            </div>

            <p className="text-center mt-6 text-sm">
              Don't have an account? <a href="#" className="link link-primary" onClick={(e) => e.preventDefault()}>Sign up</a>
            </p>
          </div>
          <form method="dialog" className="modal-backdrop" onClick={() => setShowLogin(false)}>
            <button>close</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Navbar;