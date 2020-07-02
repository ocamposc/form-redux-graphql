import {
    CREATE_PERSONA,
    CREATE_PERSONA_SUCCESS,
    CREATE_PERSONA_ERROR,
    GET_PERSONAS,
    GET_PERSONAS_SUCCESS,
    GET_PERSONAS_ERROR,
    DELETE_PERSONA,
    DELETE_PERSONA_SUCCESS,
    DELETE_PERSONA_ERROR
} from '../types';

const initialState = {
    personas: [],
    error: false,
    loading: false
    //deletePersona: null
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
        case GET_PERSONAS_ERROR:
        case CREATE_PERSONA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_PERSONAS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                personas: action.payload
            }
        default:
            return state;
    }
}