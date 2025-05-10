import React, { createContext, useEffect, useReducer } from 'react';
import { products } from '@/data/products';

const filtersContext = createContext();

// Corrected initialState
const initialState = {
    allProducts: [],
    filters: {
        category: 'All',
        minPrice: 0,
        maxPrice: Math.max(...products.map(p => p.price)),
        rating: '',
    },
    sort: '',
};

const filtersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL_PRODUCTS':
            return { ...state, allProducts: action.payload };
        case 'SET_FILTERS':
            return { ...state, filters: action.payload };
        case 'SET_SORT':
            return { ...state, sort: action.payload };
        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters: {
                    category: 'All',
                    minPrice: 0,
                    maxPrice: Math.max(...products.map(p => p.price)),
                    rating: '',
                },
                sort: ''
            };
        default:
            return state;
    }
};

const FiltersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filtersReducer, initialState);

    const applyFiltersAndSort = () => {
        let filteredProducts = [...products];

        // Apply Filters
        filteredProducts = filteredProducts.filter(product => {
            return (
                (state.filters.category === 'All' || product.category === state.filters.category) &&
                (!state.filters.minPrice || product.price >= state.filters.minPrice) &&
                (!state.filters.maxPrice || product.price <= state.filters.maxPrice) &&
                (!state.filters.rating || product.rating >= parseFloat(state.filters.rating))
            );
        });

        // Apply Sorting
        let sortedProducts = [...filteredProducts];
        if (state.sort === 'price-low') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (state.sort === 'price-high') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (state.sort === 'featured') {
            sortedProducts.sort((a, b) => b.rating - a.rating);
        }

        dispatch({ type: 'SET_ALL_PRODUCTS', payload: sortedProducts });
    };

    useEffect(() => {
        applyFiltersAndSort();
    }, [state.filters, state.sort]);

    const setFilters = (filters) => {
        dispatch({ type: 'SET_FILTERS', payload: filters });
    };

    const setSort = (sort) => {
        dispatch({ type: 'SET_SORT', payload: sort });
    };

    const handleClearFilters = () => {
        dispatch({ type: 'CLEAR_FILTERS' });
    };

    const values = {
        ...state,
        setFilters,
        setSort,
        handleClearFilters,
    };

    return (
        <filtersContext.Provider value={values}>{children}</filtersContext.Provider>
    );
};

export default filtersContext;
export { FiltersProvider };
