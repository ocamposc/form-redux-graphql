import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createPersonaAction } from '../actions/personaActions';

const NewPersona = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    
    const addPersona = persona => dispatch(createPersonaAction(persona));

    const submitNewPersona = e => {

        e.preventDefault();

        if(name.trim() === '' || lastName.trim() === '' || age <= 0 || email.trim() === '') {
            return;
        }

        addPersona({
            name,
            lastName,
            age,
            email
        });

        history.push('/');
    }

    return(
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nueva Persona
                        </h2>

                        <form
                            onSubmit={submitNewPersona}
                        >
                            <div className='form-group'>
                                <label>Nombre</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre'
                                    name='name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
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
                                    onChange={e => setLastName(e.target.value)}
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
                                    onChange={e => setAge(Number(e.target.value))}
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
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <button
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercased-block w-100'>
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPersona;