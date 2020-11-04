import axios from 'axios';
// import _ from 'lodash';

import {
    API_CONTEXT_PATH
} from '../../../shared/config/constants';
import AuthService from './auth.service';


const API_SCHEDULES_URL = `${API_CONTEXT_PATH}/api/auth`;

export const ACTION_TYPES = {
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAIL: 'REGISTER_FAIL',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
    LOGOUT: 'LOGOUT',
    SET_MESSAGE: 'SET_MESSAGE',
    CLEAR_MESSAGE: 'CLEAR_MESSAGE'
};

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    message: "",
    user: user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null },
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_MESSAGE:
            return {
                message: action.payload
            };
        case ACTION_TYPES.CLEAR_MESSAGE:
            return {
                message: ""
            };
        case ACTION_TYPES.REGISTER_SUCCESS:
        case ACTION_TYPES.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false
            };
        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user
            };
        case ACTION_TYPES.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        case ACTION_TYPES.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return state;
    }
}

/**
 * Check localStorage for user item. 
 * If there is a logged in user with accessToken (JWT), return HTTP Authorization header.
 * Otherwise, return an empty object
 */
export const authHeader = () => {
    // const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}

export const getPublicContent = () => {
    return axios.get(API_CONTEXT_PATH + "/all");
};

export const getUserBoard = () => {
    return axios.get(API_CONTEXT_PATH + "/user", {headers: authHeader()});
}

export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
        (response) => {
            dispatch({
                type: ACTION_TYPES.REGISTER_SUCCESS
            });
            dispatch({
                type: ACTION_TYPES.SET_MESSAGE,
                payload: response.data.message
            });
            // return Promise.resolve();
        },
        (error) => {
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({
                type: ACTION_TYPES.REGISTER_FAIL
            });
            dispatch({
                type: ACTION_TYPES.SET_MESSAGE,
                payload: message
            });
            // return Promise.reject();
        }
    )
}

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
        (data) => {
            dispatch({
                type: ACTION_TYPES.LOGIN_SUCCESS,
                payload: {user: data}
            });
            
            // return Promise.resolve();
        },
        (error) => {
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message || 
                error.toString();
            dispatch({
                type: ACTION_TYPES.LOGIN_FAIL
            });
            dispatch({
                type: ACTION_TYPES.SET_MESSAGE,
                payload: message
            });

            // return Promise.reject();
        }
    )
}

export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: ACTION_TYPES.LOGOUT
    });
}

export const setMessage = (message) => ({
    type: ACTION_TYPES.SET_MESSAGE,
    payload: message
});

export const clearMessage = () => ({
    type: ACTION_TYPES.CLEAR_MESSAGE
});