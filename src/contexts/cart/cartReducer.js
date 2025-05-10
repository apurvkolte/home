import { products } from '@/data/products';
import { toast } from 'react-toastify';

// Action Types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM_CART = 'REMOVE_ITEM_CART';

// Initial State
const initialState = {
    cartItems: typeof window !== 'undefined' && localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
};

// Reducer
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === item.product ? { ...x, quantity: item.quantity } : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case REMOVE_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            };
        default:
            return state;
    }
};

// Action Creators
export const addItemToCart = (id, quantity) => (dispatch, getState) => {
    const product = products.find((p) => p.id === id);
    const state = getState();

    if (product) {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                product: product.id,
                name: product.name,
                image: product.image,
                quantity,
                price: product.price,
                stock: product.stock,
            },
        });

        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        toast.success(`${product.name} added to cart!`);
    } else {
        console.error(`Product with id ${id} not found.`);
        toast.error(`Product with id ${id} not found.`);
    }
};

export const removeItemFromCart = (id) => (dispatch, getState) => {
    const state = getState();
    const product = state.cartItems.find((item) => item.product === id);

    if (product) {
        dispatch({
            type: REMOVE_ITEM_CART,
            payload: id,
        });

        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        toast.success(`${product.name} removed from cart!`);
    } else {
        toast.error(`Product could not be removed from cart!`);
    }
};