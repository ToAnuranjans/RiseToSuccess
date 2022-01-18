import axios from 'axios';

export default class Server {

    constructor() { }

    async getUsers() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (error) {
            throw error;
        }
    }

}
