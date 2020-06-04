import React, { createContext, useReducer } from "react"

const initialState = {
   logged: false,
}
const store = createContext(initialState)

const { Provider } = store

const SessionProvider = ({ children }) => {
   const [state, dispatch] = useReducer((state, action) => {
      switch (action.type) {
         case "logged":
            return {
               ...state,
               logged: action.payload,
            }
         default:
            throw new Error()
      }
   }, initialState)

   return <Provider value={{ dispatch, state }}>{children}</Provider>
}

export { store, SessionProvider }
