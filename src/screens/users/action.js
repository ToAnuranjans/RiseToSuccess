import Server from '../../api/Server';

export function getAllUsers() {
    return dispatch => new Server().getUsers()
        .then(users => dispatch({ type: 'GET_ALL_USERS', payload: users }))
        .catch(error => dispatch({ type: 'ERROR', payload: 'Error ocurred while loading uses' }));
};