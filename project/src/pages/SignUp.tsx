import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
//import { useAuthStore } from '../store/authStore';
import {auth} from '../store/firebase'

import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - in real app, this would make an API call
    // login({
    //   id: Date.now().toString(),
    //   email,
    //   name,
    //   role: 'user',
    // });
    // navigate('/');


    // try{
    //    createUserWithEmailAndPassword(auth,email,password);
    //   console.log("Account  created successfully");
    // }catch(err){
    //   console.log(err);
    // }


    createUserWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
      // User successfully created
      var user = userCredential.user;
      console.log("User registered: ", user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        console.log("This email is already in use. Please try logging in.");
        // Optionally, offer to reset password or suggest login page
      } else {
        console.error("Error registering user: ", errorMessage);
      }
        });
  
     navigate('/');

  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:text-blue-700">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;