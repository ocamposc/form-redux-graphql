import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { deletePersonaAction } from '../actions/personaActions'

const Persona = ({persona}) => {
    const { id, name, lastName, age, email } = persona

    const dispatch = useDispatch();
    
    const confirmDelete = id => {


        dispatch(deletePersonaAction(id));
        console.log({id})
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td className='acciones'>
                <Link to={`/personas/edit/${id}`} className='btn btn-primary mr-2'>
                    Editar
                </Link>
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