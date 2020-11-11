import React from 'react';
import {useLocalObservable} from 'mobx-react';

import {createControllerStore} from '../store/controllerStore';

const ControllerContext = React.createContext(null);

export const ControllerProvider = ({children}) => {
  const controllerStore = useLocalObservable(createControllerStore);

  return (
    <ControllerContext.Provider value={controllerStore}>
      {children}
    </ControllerContext.Provider>
  );
};

export const useControllerStore = () => React.useContext(ControllerContext);
