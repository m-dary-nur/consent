import React, { memo, useContext, useState, useEffect } from "react"
import { Router } from "react-router"
import { store, SessionProvider } from "../../context/session"
import DynamicRoutes from "../Container"
import history from "../../utils/history"

import "./style.css"

const App = () => {
   const { ...global } = useContext(store)
   const [isReady, setReady] = useState(false)

   useEffect(() => {
      setTimeout(() => setReady(true), 1000) //just delaying like when fetch data, can remove anytime
      if (window.location.pathname === "/" && !global.logged) {
         history.replace("/login")
      }
   }, [isReady, setReady, global.logged])

   return (
      <Router history={history}>
         <div className="min-h-screen font-sans">
            <SessionProvider>
               <DynamicRoutes isReady={isReady} />
            </SessionProvider>
         </div>
      </Router>
   )
}

export default memo(App)
