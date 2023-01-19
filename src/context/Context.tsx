import React, { createContext, useContext } from "react";

interface IContext {
    changeDateFormat: (date: string) => string,
}
interface ContextProviderProps {
    children: React.ReactNode,
}

const Context = createContext<IContext | any>(null);

export const useContextAll = () => {
    return useContext(Context);
};

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {

    const changeDateFormat = (date: string): string => {
        const arr = date.split('-');
        const dateFormat = arr.reverse().join('.');
        return dateFormat;
    } 

    return (
        <Context.Provider value={{changeDateFormat}}>
            {children}
        </Context.Provider>
    )
}