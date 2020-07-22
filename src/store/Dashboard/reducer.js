import * as types from './actionTypes'


const initialState = {
    formData: [],
};

export default function data(state = initialState, action = {}) {
    switch (action.type) {
        case types.FORM_DATA_SUCCESS:
            let formData = state.formData
            formData.push(action.payload)
            return {
                ...state,
                formData: formData,
                fetching: false
            }
        default:
            return state;
    }
}