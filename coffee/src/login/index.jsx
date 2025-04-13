import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import useCartStore from '@/store/cartstore';

const Login = () => {
  const { setUser } = useCartStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).catch((error) =>
      console.error('Persistence Error:', error)
    );
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      setUser({ email: user.email, uid: user.uid });
      navigate('/', { replace: true });
    } catch (err) {
      console.error('Firebase Auth Error:', err.message);
      switch (err.code) {
        case 'auth/user-not-found':
          setError('User not found. Please check your email or sign up.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password. Try again.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email format.');
          break;
        case 'auth/too-many-requests':
          setError('Too many failed attempts. Please wait and try again.');
          break;
        case 'auth/invalid-credential':
          setError('Email or password is incorrect.');
          break;
        default:
          setError('Login failed. Please try again.');
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <h2 className="text-center text-lg font-sofia uppercase tracking-wider mb-10">Login</h2>

        {error && (
          <p className="text-red-500 text-center font-medium mb-4">{error}</p>
        )}

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="border-b bg-transparent border-gray-300 outline-none py-2 px-1 placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
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
              className="bg-black text-white px-10 py-3 uppercase text-sm tracking-widest hover:opacity-90 transition-all"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-8 mt-6 text-sm font-medium">
          <Link to="/" className="hover:underline">
            Return to Store
          </Link>
          <Link to="/forgot-password" className="hover:underline">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
