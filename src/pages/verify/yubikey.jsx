import React, { memo, useState, useEffect } from "react"
import logo from "../../images/logo.png"
import history from "../../helpers/history"
import Icon from "../../components/Icon"

const Yubikey = () => {
   const [plug, setPlug] = useState(false)

   const gotoOtp = () => history.push("/verify/otp")
   const gotoLogin = () => history.push("/login")

   useEffect(() => {
      setTimeout(() => setPlug(true), 2000)
   }, [setPlug])

   return (
      <div className="h-screen flex justify-center items-center bg login">
         <div className="w-full mx-2 p-6 pt-10 bg-white md:p-10 rounded-lg shadow-lg login-box-md">
            <div className="flex flex-col items-center text-center pb-8 pt-0">
               <img src={logo} alt="consent" className="logo" />
            </div>
            <div className="text-gray-600 text-center font-semibold">2-Step Verification</div>
            <div className="pt-16 text-center">Insert your USB security key</div>
            <div className="pt-2 pb-4 text-xxs text-center cursor-pointer">If your key has a button or gold disk, tap it now</div>
            <div className="mt-4 mb-2 p-4 text-center border border-gray-300 text-sm">
               {plug ? "Finding security key..." : "waiting USB security key"}
            </div>
            <div className="w-full text-center">
               <label onClick={gotoOtp} className="text-xxs cursor-pointer whitespace-no-wrap">
                  Use mobile authenticator or OTP instead
               </label>
            </div>
            <div className="flex justify-center py-5">
               <button onClick={gotoLogin} type="button" className=" px-10 py-2 pt-6 text-base">
                  <Icon icon="chevron-left" className="mx-2" />
                  Cancel
               </button>
            </div>
         </div>
         <div className="w-full fixed px-5 text-xs text-white text-center md:text-right legal">
            <label>Term of use. Privacy policy</label>
         </div>
      </div>
   )
}

export default memo(Yubikey)
