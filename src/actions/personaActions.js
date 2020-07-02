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
    UPDATE_PERSONA,
    GET_UPDATE_PERSONA,
    UPDATE_PERSONA_SUCCESS,
    UPDATE_PERSONA_ERROR
}
from '../types';
import clientAxios from '../config/axios';
import queries from '../constants/queries';
import Swal from 'sweetalert2';

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
            const res = await clientAxios.post('http://localhost:4000/graphql', {
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

        try {
            await clientAxios.post('http://localhost:4000/graphql', {
                query: `mutation{
                    deletePersona(id: ${id})
                  }`
            });
            dispatch(deletePersonaSuccess());
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        } catch (error) {
                dispatch(deletePersonaError());
        }
    }
}

const getDeletePersona = id => ({
    type: DELETE_PERSONA,
    payload: id
})
const deletePersonaSuccess = () => ({
    type: DELETE_PERSONA_SUCCESS
})
const deletePersonaError = () => ({
    type: DELETE_PERSONA_ERROR,
    payload: true
})

export function getUpdatePersonaAction(persona) {
    return (dispatch) => {
        dispatch(getUpdatePersona(persona));
    }
}

const getUpdatePersona = (persona) => ({
    type:GET_UPDATE_PERSONA,
    payload: persona
})

export function updatePersonaAction(persona) {
    const { id, name, lastName, age, email } = persona;
    return async (dispatch) => {
        dispatch(updatePersona())

        try {
            await clientAxios.post('http://localhost:4000/graphql', {
                query: `mutation{
                    updatePersona(id:${id}, data:{
                      name:"${name}",
                      lastName:"${lastName}",
                      age:${age},
                      email:"${email}"
                    })
                  }`
            })
            dispatch(updatePersonaSuccess(persona))
        } catch (error) {
            dispatch(updatePersonaError())
        }
    }
}

const updatePersona = () => ({
    type: UPDATE_PERSONA,
})
const updatePersonaSuccess = persona => ({
    type: UPDATE_PERSONA_SUCCESS,
    payload: persona
})
const updatePersonaError = () => ({
    type: UPDATE_PERSONA_ERROR,
    payload: true
})