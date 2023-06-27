import { useState, FormEvent } from 'react'
import { ArrowPathIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import { useMutateAuth } from '../hooks/useMutateAuth'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  // const [isLogin, setIsLogin] = useState(true)
  const { loginMutation } = useMutateAuth()
  const navigate = useNavigate()

  const submitAuthHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      loginMutation.mutate({
        email: email,
        password: pw,
      })
  }
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono">
      <div className="flex items-center">
        <CheckBadgeIcon className="h-8 w-8 mr-2 text-blue-500" />
        <span className="text-center text-3xl font-extrabold">
          Todo app by React/Go(Echo)
        </span>
      </div>
      <h2 className="my-6">Login</h2>
      <form onSubmit={submitAuthHandler}>
        <div>
          <input
            className="mb-3 px-3 text-sm py-2 border border-gray-300"
            name="email"
            type="email"
            autoFocus
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            className="mb-3 px-3 text-sm py-2 border border-gray-300"
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
          />
        </div>
        <div className="flex justify-center my-2">
          <button
            className="disabled:opacity-40 py-2 px-4 rounded text-white bg-indigo-600"
            disabled={!email || !pw}
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <ArrowPathIcon
        onClick={() => navigate("/signup")}
        className="h-6 w-6 my-2 text-blue-500 cursor-pointer"
      />
    </div>
  )
}
