import React, { createContext, useContext, useState } from 'react';

  const StateContext = createContext();

  export const StateProvider = ({ children }) => {

    const [ requestData, setRequestData ] = useState({
      'ID': [],
      'Language': 'Python',
      'Difficulty': 'beginner',
      'Length': 'short',
      'Request': ''
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