import React, { createContext } from 'react'

const Context = ({children}) => {
  return (
    <DetailContext.Provider>
        {children}
    </DetailContext.Provider>
  )
}

export const DetailContext = createContext(null);
export default Context