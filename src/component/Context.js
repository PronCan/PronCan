import React, { createContext, useEffect, useState } from 'react'
// import jsonData from "../data/data.json"
import jsonData from "../data/data_temp.json"

const Context = ({children}) => {
  return (
    <DataContext.Provider value={{jsonData}}>
        {children}
    </DataContext.Provider>
  )
}

export const DataContext = createContext(null);
export default Context