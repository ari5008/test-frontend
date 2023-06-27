import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Todo } from './components/Todo'
import axios from 'axios'
import { CsrfToken } from './types'
import { Login } from './components/Login';
import { Signup } from './components/Signup'
import { Home } from './components/Home'

function App() {
  useEffect(() => {
    axios.defaults.withCredentials = true
    const getCsrfToken = async () => {
      const { data } = await axios.get<CsrfToken>(
        `${process.env.REACT_APP_API_URL}/csrf`
      )
      axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
    }
    getCsrfToken()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
