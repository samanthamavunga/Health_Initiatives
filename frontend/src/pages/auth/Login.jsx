import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const dummyUser = { name: 'Venture User', email, role: 'venture_owner' }
    login(dummyUser, 'dummy_token')
    navigate('/')
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url('/bg-image1.jpg')`, // Put your image in public/
      }}
    >
      {/* Header/Logo */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          Venture Audit System
        </h1>
      </div>

      {/* Login Card */}
      <div className="bg-white/90 backdrop-blur-md max-w-md w-full p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-primaryColor mb-6">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor-light"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor-light"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primaryColor hover:bg-primaryColor-dark text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-primaryColor hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
