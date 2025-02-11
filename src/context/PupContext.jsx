import { createContext, useState } from 'react';
import banana from '../pups/banana-pup.jpg';
import speedy from '../pups/speedy-pup.jpg';
import sleepy from '../pups/sleepy-pup.jpg';

export const PupProvider = (props) => {
  const [puppyType, setPuppyType] = useState(speedy);

  return (
    <PupContext.Provider value={{ puppyType, setPuppyType }}>
      {props.children}
    </PupContext.Provider>
  )
}



export const PupContext = createContext();
