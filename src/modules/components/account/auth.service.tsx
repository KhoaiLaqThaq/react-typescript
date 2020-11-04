import axios from 'axios';
import {
    API_CONTEXT_PATH
} from '../../../shared/config/constants';

const API_SCHEDULES_URL = `${API_CONTEXT_PATH}/api/auth`;

/**
 * Login function
 * @param username
 * @param password
 */
const login = (username, password) => {
    return axios.post(API_CONTEXT_PATH + '/signin', {
        username,
        password
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};

/**
 * Register function
 * @param username 
 * @param email 
 * @param password 
 */
const register = (username, email, password) => {
    return axios.post(API_CONTEXT_PATH + '/signup', {
        username,
        email,
        password
    });
};

// Logout function
const logout = () => {
    localStorage.removeItem("item");
}

export default {
    register,
    login,
    logout
};