import React from 'react'
import LoginForm from '../Components/LoginForm'

function Login() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
      Job Fair Portal
    </h1>
    <p className="mx-auto mt-4 max-w-lg p-2 text-center text-gray-500">
    Power your career with CUI Job Fair Portal. Create eye-catching resumes and connect with top companies for endless opportunities.
    </p>
  {/* Login Form */}
  <LoginForm  />
  </div>
    </div>
  )
}

export default Login
