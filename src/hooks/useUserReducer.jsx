import { useContext, useReducer, createContext, Children } from "react";
import {initialStore, storeReducer} from '../stores/user';

const StoreContext = createContext ();

export const UserProvider =({children}) =>{
    
    const [ store, dispatch] = useReducer (storeReducer, initialStore());

    return( 
        <StoreContext.Provider value={{userStore: store, userDispacht: dispatch}}>
        {children}
        </StoreContext.Provider>
    )

}

export const useUserReducer = () => {
    const { userStore, userDispacht} = useContext(StoreContext);
    return { userStore, userDispacht}
}
