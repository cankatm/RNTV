import React from 'react';

import {createControllerStore} from '../store/controllerStore';

const ControllerContext = React.createContext(null);

export const ControllerProvider = ({children}) => {
  return (
    <ControllerContext.Provider value={createControllerStore}>
      {children}
    </ControllerContext.Provider>
  );
};

export const useControllerStore = React.useContext(ControllerContext);
