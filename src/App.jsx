import React, { useContext, useState, useEffect } from "react"
import { Router } from "react-router"
import { store, GlobalProvider } from "./stores/globalStore"
import DynamicRoutes from "./components/DynamicRoutes"
import history from "./helpers/history"

import "./App.css"
import "./styles/global.css"

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
         <div className="h-screen font-sans">
            <GlobalProvider>
               <DynamicRoutes isReady={isReady} />
            </GlobalProvider>
         </div>
      </Router>
   )
}

export default React.memo(App)
