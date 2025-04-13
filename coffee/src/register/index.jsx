import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration Successful!');
      navigate('/login');
    } catch (err) {
      handleFirebaseErrors(err);
    }

    setLoading(false);
  };

  const handleFirebaseErrors = (err) => {
    let errorMessage = 'Registration failed. Please try again.';
    if (err.code === 'auth/email-already-in-use') {
      errorMessage = 'This email is already in use. Try logging in.';
    } else if (err.code === 'auth/weak-password') {
      errorMessage = 'Password should be at least 6 characters.';
    } else if (err.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email format.';
    }
    setError(errorMessage);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <h2 className="text-center text-lg font-sofia uppercase tracking-wider mb-10">Register</h2>

        {error && <p className="text-red-500 text-center font-medium mb-4">{error}</p>}

        <form className="space-y-6" onSubmit={handleRegister}>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2" htmlFor="email">Email adress</label>
            <input
              type="email"
              id="email"
              placeholder="Email adress"
              className="border-b border-gray-300 py-2 px-1 placeholder-gray-400 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border-b border-gray-300 py-2 px-1 placeholder-gray-400 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className={`bg-black text-white px-10 py-3 uppercase text-sm tracking-widest hover:opacity-90 transition-all ${
                loading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-8 mt-6 text-sm font-medium">
          <Link to="/" className="hover:underline">Return to store</Link>
         
        </div>
      </div>
    </div>
  );
};

export default Register;
