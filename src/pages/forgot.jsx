import React, { memo, useState } from "react"
import logo from "../images/logo.png"

const Forgot = () => {
   const [form, setForm] = useState({
      email: "",
   })

   const handleChange = e => {
      e.persist()
      setForm(state => ({ ...state, [e.target.name]: e.target.value }))
   }

   const handleSendReq = () => {}

   return (
      <div className="h-screen flex justify-center items-center bg login">
         <div className="w-full mx-2 p-6 pt-10 bg-white md:p-10 rounded-lg shadow-lg login-box-md">
            <div className="flex flex-col items-center text-center pb-8 my-3 pt-0">
               <img src={logo} alt="consent" className="logo" />
            </div>
            <div className="text-gray-600 text-center">Enter your registered email and we send you a password reset link.</div>
            <div className="flex flex-col my-16">
               <TextInput name="email" value={form.email} onChange={handleChange} placeholder="Email ID" />
            </div>
            <div className="flex justify-center py-5">
               <button
                  onClick={handleSendReq}
                  type="button"
                  className="bg-hover text-white px-10 py-2 btn-rounded text-base transition-all duration-300 shadow-lg hover:shadow-sm"
               >
                  SEND REQUEST
               </button>
            </div>
         </div>
         <div className="w-full fixed px-5 text-xs text-white text-center md:text-right legal">
            <label>Term of use. Privacy policy</label>
         </div>
      </div>
   )
}

export default memo(Forgot)

const TextInput = memo(props => (
   <input
      {...props}
      className="my-4 px-4 py-2 border-b border-gray-400 focus:border-second-500 placeholder-black transition-all duration-300"
      autoComplete="off"
      spellCheck="false"
   />
))
