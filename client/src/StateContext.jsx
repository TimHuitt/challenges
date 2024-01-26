import React, { createContext, useContext, useState } from 'react';

  const StateContext = createContext();

  export const StateProvider = ({ children }) => {
    const [ stateData, setStateData ] = useState({
      'ID': [],
      'Language': 'Python',
      'Difficulty': 'beginner',
      'Length': 'short',
      'State': ''
    })

    
    const [ showSettings, setShowSettings ] = useState(false)
    
    const value = {
      stateData,
      setStateData,
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