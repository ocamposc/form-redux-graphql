import {
    CREATE_PERSONA,
    CREATE_PERSONA_SUCCESS,
    CREATE_PERSONA_ERROR,
    GET_PERSONAS,
    GET_PERSONAS_SUCCESS,
    GET_PERSONAS_ERROR,
    DELETE_PERSONA,
    DELETE_PERSONA_SUCCESS,
    DELETE_PERSONA_ERROR,
    GET_UPDATE_PERSONA,
    UPDATE_PERSONA_SUCCESS,
    UPDATE_PERSONA_ERROR
} from '../types';
import { act } from 'react-dom/test-utils';

const initialState = {
    personas: [],
    error: false,
    loading: false,
    deletePersona: null,
    updatePersona: null
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
        case DELETE_PERSONA_ERROR:
        case GET_PERSONAS_ERROR:
        case CREATE_PERSONA_ERROR:
        case UPDATE_PERSONA_ERROR:
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
        case DELETE_PERSONA:
            return {
                ...state,
                deletePersona: action.payload
            }
        case DELETE_PERSONA_SUCCESS:
            return {
                ...state,
                personas: state.personas.filter(personas => personas.id !== state.deletePersona),
                error:false,
                deletePersona: null
            }
        case GET_UPDATE_PERSONA:
            return {
                ...state,
                updatePersona: action.payload
            }
        case UPDATE_PERSONA_SUCCESS:
            return {
                ...state,
                updatePersona: null,
                personas: state.personas.map(persona => persona.id === action.payload.id ? persona = action.payload : persona)

            }
        default:
            return state;
    }
}