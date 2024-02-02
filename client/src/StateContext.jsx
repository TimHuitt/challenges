import React, { createContext, useContext, useState } from 'react';

  const StateContext = createContext();

  export const StateProvider = ({ children }) => {

    const [ requestData, setRequestData ] = useState({
      'ID': [],
      'language': 'Python',
      'difficulty': 'beginner',
      'length': 'short',
      'request': ''
    })

    
    const [ showSettings, setShowSettings ] = useState(false)
    
    const value = {
      requestData,
      setRequestData,
      showSettings,
      setShowSettings,
    }

    return (
      <StateContext.Provider value={value}>
        {children}
      </StateContext.Provider>
    );
  };

  export const useStateContext = () => {
    return useContext(StateContext);
  };