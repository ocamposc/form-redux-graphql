import {
    CREATE_PERSONA,
    CREATE_PERSONA_SUCCESS,
    CREATE_PERSONA_ERROR,
    GET_PERSONAS,
    GET_PERSONAS_SUCCESS,
    GET_PERSONAS_ERROR
} from '../types';

const initialState = {
    personas: [],
    error: false,
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PERSONAS:
        case CREATE_PERSONA:
            return {
                ...state,
                loading: action.payload
            }
        case CREATE_PERSONA_SUCCESS:
            return {
                ...state,
                loading: false,
                personas: [...state.personas, action.payload]
            }
        case CREATE_PERSONA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_PERSONAS_SUCCESS:
            return {

            }
        case GET_PERSONAS_ERROR:
            return {

            }
        default:
            return state;
    }
}