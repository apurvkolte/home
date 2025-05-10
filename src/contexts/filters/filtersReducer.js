import { products } from '@/data/products';

const filtersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FILTERS':
            return { ...state, filters: action.payload };
        case 'SET_SORT':
            return { ...state, sort: action.payload };
        case 'SET_ALL_PRODUCTS':
            return { ...state, allProducts: action.payload };
        case 'CLEAR_FILTERS':
            const initialMaxPrice = Math.max(...products.map(p => p.price));
            return {
                ...state,
                filters: {
                    category: 'All',
                    minPrice: 0,
                    maxPrice: initialMaxPrice,
                    rating: '',
                },
                sort: ''
            };
        default:
            return state;
    }
};

export default filtersReducer;
