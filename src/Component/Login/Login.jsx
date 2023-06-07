import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <div className="flex flex-col items-center  mt-10">
         <Helmet>
        <title>Login | Theater Art Institute</title>
      </Helmet>
      <div className=" bg-white p-10 shadow-2xl rounded-3xl">
        <h2 className="text-3xl font-bold mb-5 text-center">Login</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className=" text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className=" text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-indigo-600 transition-colors w-full mb-4"
          >
            Sign In
          </button>
          <div className="flex items-center justify-center">
            <div className="border-t border-gray-300 w-16"></div>
            <span className="text-gray-500 mx-2">Or sign in with</span>
            <div className="border-t border-gray-300 w-16"></div>
          </div>
          <button
            type="button"
            className="bg-red-500 text-white rounded px-4 py-2 font-semibold hover:bg-red-600 transition-colors w-full mt-4 flex items-center justify-center rounded-lg"
          >
            <FcGoogle className="mr-2" size={20} />
            Sign In with Google
          </button>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <Link to="/signup"><span className='text-indigo-800'> Create a new Account</span></Link> 
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
