"use client";

import { useState } from 'react'
import { signUpSuccess } from '@/store/userSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation';


export default function SignupPage() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error , setError] = useState('')

  const router =  useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
  
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })
  
    const data = await res.json()
  
    if (res.ok) {
      console.log('fsdfs',data.user);
      localStorage.setItem('token', data.token) 
      dispatch(signUpSuccess(data.user))
      router.push('/')
    } else {
      setError(data.error || 'Login failed')

      setTimeout(() => {
        setError('')
      }, 3000)
    }
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Sign Up
        </button>
        <p className="text-sm mt-4 text-center">
          Already have an account? <a href="/login" className="text-green-500">Login</a>
        </p>
      </form>
    </div>
  )
}
