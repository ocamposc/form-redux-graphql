import {
    CREATE_PERSONA,
    CREATE_PERSONA_SUCCESS,
    CREATE_PERSONA_ERROR,
    GET_PERSONAS,
    GET_PERSONAS_SUCCESS,
    GET_PERSONAS_ERROR
}
from '../types';

export function createPersonaAction(persona) {
    return async (dispatch) => {
        dispatch(addPersona());

        try {            
            dispatch(addPersonaSuccess(persona));
        } catch(error) {
            dispatch(addPersonaError(true));
        }
    }
}

const addPersona = () => ({
    type: CREATE_PERSONA,
    payload: true
})
const addPersonaSuccess = persona => ({
    type: CREATE_PERSONA_SUCCESS,
    payload: persona
})
const addPersonaError = status => ({
    type: CREATE_PERSONA_ERROR,
    payload: status
})

export function getPersonasAction() {
    return async (dispatch) => {
        dispatch(getPersonas());

    } 
}

const getPersonas = () => ({
    type: GET_PERSONAS,
    payload: true
})