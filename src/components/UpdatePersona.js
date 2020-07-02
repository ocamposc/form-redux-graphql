import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonaAction } from '../actions/personaActions'
import { useHistory } from 'react-router-dom';

const UpdatePersona = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [persona, setPersona] = useState({
        name: '',
        lastName: '',
        age: '',
        email: ''
    })

    const editPersona = useSelector(state => state.personas.updatePersona);
    
    useEffect(() => {
        setPersona(editPersona);
    }, [editPersona])


    const onChangeForm = e => {
        setPersona({
            ...persona,
            [e.target.name] : e.target.value
        })
    }

    const { name, lastName, age, email} = persona || {};

    const submitUpdatePersona = e => {
        e.preventDefault();

        dispatch(updatePersonaAction(persona));
        history.push('/');
    }
    
    return(
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Editar Persona
                        </h2>

                        <form
                            onSubmit={submitUpdatePersona}
                        >
                            <div className='form-group'>
                                <label>Nombre</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre'
                                    name='name'
                                    value={name}
                                    onChange={onChangeForm}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Apellido</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Apellido'
                                    name='lastName'
                                    value={lastName}
                                    onChange={onChangeForm}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Edad</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Edad'
                                    name='age'
                                    value={age}
                                    onChange={onChangeForm}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Email</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    onChange={onChangeForm}
                                />
                            </div>

                            <button
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercased-block w-100'>
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdatePersona;