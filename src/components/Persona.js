import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

import { useDispatch } from 'react-redux';
import { deletePersonaAction, getUpdatePersonaAction } from '../actions/personaActions'

const Persona = ({ persona }) => {
    const { id, name, lastName, age, email } = persona

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                dispatch(deletePersonaAction(id));
            }
        })
    }

    const redirectToUpdate = persona => {
        dispatch(getUpdatePersonaAction(persona));
        history.push(`/personas/edit/${id}`);
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td className='acciones'>
                <button 
                type='button'
                className='btn btn-primary mr-2'
                onClick={() => redirectToUpdate(persona)}>
                    Editar
                </button>
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => confirmDelete(id)}
                >Eliminar </button>
            </td>
        </tr>
    )
}

export default Persona;