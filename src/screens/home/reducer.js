import { GET_ALL_PRODUCT } from './action';
const initialState = {
    products: [
        {
            name: 'Product 1',
            price: 36.0,
        },
        {
            name: 'Product 2',
            price: 72.0,
        },
    ],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'GET_ALL_PRODUCT':
            return { ...state, ...payload };

        default:
            return state;
    }
};
