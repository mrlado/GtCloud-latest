import React,{createContext, useState} from 'react'


export const Loadingcontext = createContext(null)



export const LoadingProvider = ({children}) => {

let [Loading,setLoading]=useState(true)

  return (
    <Loadingcontext.Provider value={{Loading,setLoading}}>
        {children}
    </Loadingcontext.Provider>
  )
}

