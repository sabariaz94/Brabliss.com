'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email?.trim().toLowerCase();

      console.log('Logged-in email:', userEmail); // Optional for debugging
      toast.success('Login successful!');

      if (userEmail === 'admin1122@gmail.com') {
        router.push('/admin');
      } else {
        router.push('/products');
      }

    } catch (error) {
      console.error('Login error:', error.message);
      toast.error('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div>
    <Navbar/>
     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md backdrop-blur-md bg-white/80 border border-pink-100 shadow-2xl rounded-3xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-pink-600 text-center">Welcome Back 💖</h1>
        <p className="text-center text-sm text-pink-500">Sign in to continue to BraBliss</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-pink-700">Email address</label>
            <input
              type="email"
              required
              className="w-full mt-1 px-4 py-2 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-pink-700">Password</label>
            <input
              type="password"
              required
              className="w-full mt-1 px-4 py-2 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-pink-400' : 'bg-pink-600 hover:bg-pink-700'} text-white py-2 rounded-xl font-semibold shadow transition`}
          >
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </form>

        <div className="text-center text-sm text-pink-500">
          Don’t have an account?{' '}
          <Link href="/register" className="font-medium text-pink-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </motion.div>
    </div>
    <Footer/>
   </div>
  );
}