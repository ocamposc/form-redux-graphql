import React, { Fragment, useEffect } from 'react';
import Persona from './Persona';

import { useSelector, useDispatch } from 'react-redux';
import { getPersonasAction } from '../actions/personaActions';


const Personas = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadPersonas = () => dispatch(getPersonasAction());
        loadPersonas();
    }, [])

    const personas = useSelector(state => state.personas.personas);

    return(
        <Fragment>
            <h2 className='text-center my-5'>Listado de Personas</h2>
            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Apellido</th>
                        <th scope='col'>Edad</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.length === 0 ? 'No hay personas' : (
                        personas.map(persona => (
                            <Persona
                                key={persona.id}
                                persona={persona}
                                />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Personas;