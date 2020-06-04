import React, { memo, useState } from "react"
import logo from "../../assets/images/logo.png"
import history from "../../utils/history"

const Login = () => {
   const [form, setForm] = useState({
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

   const gotoForgot = () => history.push("/forgot")

   const handleLogin = () => {
      history.push("/yubikey")
   }

   return (
      <div className="h-screen flex justify-center items-center bg login">
         <div className="w-full mx-2 p-6 pt-10 bg-white md:p-10 rounded-lg shadow-lg login-box-md">
            <div className="flex flex-col items-center text-center pb-8 mb-6 pt-0">
               <img src={logo} alt="consent" className="logo" />
            </div>
            <div className="text-gray-600 text-center">Welcome back! Please login to your account.</div>
            <div className="flex flex-col">
               <TextInput name="username" value={form.username} onChange={handleChange} placeholder="Username" />
               <TextInput type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
            </div>
            <div className="flex justify-between py-6">
               <label className="flex items-center select-none cursor-pointer">
                  <input type="checkbox" name="remember" onChange={handleCheckbox} className="mr-1 text-lg whitespace-no-wrap" />{" "}
                  Remember me
               </label>
               <label onClick={gotoForgot} className="cursor-pointer whitespace-no-wrap">
                  Forgot Password
               </label>
            </div>
            <div className="flex justify-center py-5">
               <button
                  onClick={handleLogin}
                  type="button"
                  className="bg-hover text-white px-10 py-2 btn-rounded text-base transition-all duration-300 shadow-lg hover:shadow-sm"
               >
                  LOG IN
               </button>
            </div>
         </div>
         <div className="w-full fixed px-5 text-xs text-white text-center md:text-right legal">
            <label>Term of use. Privacy policy</label>
         </div>
      </div>
   )
}

const TextInput = memo(props => (
   <input
      {...props}
      className="my-4 px-4 py-2 border-b border-gray-400 focus:border-second-500 placeholder-black transition-all duration-300"
      autoComplete="off"
      spellCheck="false"
   />
))

export default memo(Login)
