import React, {FC, PropsWithChildren, createContext} from 'react';

interface AppContextValues {}

export const CommonContext = createContext<undefined | AppContextValues>(
  undefined,
);

const CommonProvider: FC<PropsWithChildren<{}>> = ({children}) => {
  return <CommonContext.Provider value={{}}>{children}</CommonContext.Provider>;
};

export default CommonProvider;
