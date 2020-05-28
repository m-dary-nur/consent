import React from "react"
import logo from "./logo.svg"
import "./App.css"
import "./styles/global.css"

const App = () => {
   const [form, setForm] = React.useState({
      username: "",
      password: "",
      remember: false,
   })

   const handleChange = e => {
      e.persist()
      setForm(state => ({ ...state, [e.target.name]: e.target.value }))
   }

   const handleCheckbox = e => {
      e.persist()
      setForm(state => ({ ...state, [e.target.name]: !state.remember }))
   }

   const handleSubmit = () => {}

   return (
      <div className="h-screen flex justify-center items-center bg login">
         <div className="w-5/6 bg-white p-10 rounded-lg shadow-lg login-box-md">
            <div className="flex flex-col items-center text-center p-8 pt-0">
               <img src={logo} alt="consent" className="logo" />
               <h1 className="text-lg">CONSENT</h1>
            </div>
            <div className="text-gray-600 text-center">Welcome back! Please login to your account.</div>
            <div className="flex flex-col">
               <TextInput name="username" value={form.username} onChange={handleChange} placeholder="Username" />
               <TextInput type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
            </div>
            <div className="flex justify-between py-6">
               <label className="flex items-center select-none cursor-pointer">
                  <input type="checkbox" name="remember" onChange={handleCheckbox} className="mr-1 text-lg" /> Remember me
               </label>
               <label className="cursor-pointer">Forgot Password</label>
            </div>
            <div className="flex justify-center py-8">
               <button
                  onClick={handleSubmit}
                  type="button"
                  className="bg-hover text-white px-10 py-2 btn-rounded text-base transition-all duration-300 shadow-lg hover:shadow-sm"
               >
                  LOG IN
               </button>
            </div>
         </div>
      </div>
   )
}

export default App

const TextInput = React.memo(props => (
   <input
      {...props}
      className="my-4 px-4 py-2 border-b border-gray-400 focus:border-second-500 placeholder-black transition-all duration-300"
      autoComplete="off"
      spellCheck="false"
   />
))
