'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Hardcoded credentials
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      // Store auth state (you might want to use a proper auth solution in production)
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff] dark:bg-[#151718] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#11181C] dark:text-[#ECEDEE]">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#687076] dark:border-[#9BA1A6] placeholder-[#687076] dark:placeholder-[#9BA1A6] text-[#11181C] dark:text-[#ECEDEE] rounded-t-md focus:outline-none focus:ring-[#d84012] focus:border-[#d84012] focus:z-10 sm:text-sm bg-[#fff] dark:bg-[#151718]"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-[#687076] dark:border-[#9BA1A6] placeholder-[#687076] dark:placeholder-[#9BA1A6] text-[#11181C] dark:text-[#ECEDEE] rounded-b-md focus:outline-none focus:ring-[#d84012] focus:border-[#d84012] focus:z-10 sm:text-sm bg-[#fff] dark:bg-[#151718]"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
          </div>

          {error && (
            <div className="text-[#d84012] text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#d84012] hover:bg-[#b3360f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d84012]"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 