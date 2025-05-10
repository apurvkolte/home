import React, { useEffect, createContext, useContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cartItems: typeof window !== 'undefined' && localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
    });

    // Sync cartItems with localStorage whenever the state changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }
    }, [state.cartItems]);

    const dispatchWithThunk = (actionCreator) => {
        if (typeof actionCreator === 'function') {
            actionCreator(dispatch, () => state);
        } else {
            dispatch(actionCreator);
        }
    };

    const value = { state, dispatch: dispatchWithThunk };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
