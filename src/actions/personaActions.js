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
}
from '../types';
import clientAxios from '../config/axios'
import queries from '../constants/queries'

export function createPersonaAction(persona) {
    return async (dispatch) => {
        dispatch(addPersona());
        try {    
            await clientAxios.post('http://localhost:4000/graphql',{
                query: `mutation{
                    createPersona(
                        data:{
                            name:"${persona.name}",
                            lastName:"${persona.lastName}",
                            age:${persona.age},
                            email:"${persona.email}"
                        }
                    )
                    {
                        name
                        lastName
                    }
                }`
            })
            dispatch(addPersonaSuccess(persona));
        } catch(error) {
            console.log(error);
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

        try {
            const res = await clientAxios.post('http://localhost:4000/graphql',{
                query: queries.GET_PERSONAS
            })
            dispatch(getPersonaSuccess(res.data.data.personas))
        } catch (error) {
            dispatch(getPersonaError())
        }
    } 
}

const getPersonas = () => ({
    type: GET_PERSONAS,
    payload: true
})
const getPersonaSuccess = personas => ({
    type: GET_PERSONAS_SUCCESS,
    payload: personas
})
const getPersonaError = () => ({
    type: GET_PERSONAS_ERROR,
    payload: true
})

export function deletePersonaAction(id) {
    return async (dispatch) => {
        dispatch(getDeletePersona(id));
    }
}

const getDeletePersona = id => ({
    type: DELETE_PERSONA,
    payload: id
})

