import { createContext } from 'react';

export const PupProvider = (props) => {
  return (
    <PupContext.Provider>
      {props.children}
    </PupContext.Provider>
  )
}



export const PupContext = createContext();
