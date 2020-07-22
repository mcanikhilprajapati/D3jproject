import * as types from './actionTypes'


const initialState = {
    Data: {},
    loading: false,
};

export default function data(state = initialState, action = {}) {
    switch (action.type) {
        case types.API_LOADING_START:
            return {
                ...state, 
                loading: true
            };
        case types.API_LOADING_STOP:
            return {
                ...state, 
                loading: false
            };
        default:
            return state;
    }
}