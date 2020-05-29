import React, { memo, useState } from "react"
import logo from "../../images/logo.png"

const Login = () => {
   const [form, setForm] = useState({
      otp: "",
   })

   const handleChange = e => {
      e.persist()
      setForm(state => ({ ...state, [e.target.name]: e.target.value }))
   }

   const handleNoCode = () => {}

   const handleVerify = () => {}

   return (
      <div className="h-screen flex justify-center items-center bg login">
         <div className="w-full mx-2 p-6 bg-white md:p-10 rounded-lg shadow-lg login-box-md">
            <div className="flex flex-col items-center text-center pb-8 pt-0">
               <img src={logo} alt="consent" className="logo" />
            </div>
            <div className="text-gray-600 text-center font-semibold">2-Step Verification</div>
            <div className="text-gray-600 pt-12 text-center">
               Please enter the 6-digit verification code your mobile application generated
            </div>
            <div className="flex flex-col">
               <TextInput type="number" name="otp" value={form.otp} onChange={handleChange} placeholder="6-digit Code" />
            </div>
            <div onClick={handleNoCode} className="flex justify-end pt-6 pb-8">
               <label className="cursor-pointer whitespace-no-wrap">No Code ?</label>
            </div>
            <div className="flex justify-center py-5">
               <button
                  onClick={handleVerify}
                  type="button"
                  className="bg-hover text-white px-10 py-2 btn-rounded text-base transition-all duration-300 shadow-lg hover:shadow-sm"
               >
                  Verify
               </button>
            </div>
         </div>
         <div className="w-full fixed px-5 text-xs text-white text-center md:text-right legal">
            <label>Term of use. Privacy policy</label>
         </div>
      </div>
   )
}

export default memo(Login)

const TextInput = memo(props => (
   <input
      {...props}
      className="my-4 px-4 py-2 border-b border-gray-400 focus:border-second-500 placeholder-black transition-all duration-300"
      autoComplete="off"
      spellCheck="false"
   />
))
