const initialState = {
    users: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_ALL_USERS':
            return [ ...state.users, ...payload ];
        default:
            return state;
    }
};

