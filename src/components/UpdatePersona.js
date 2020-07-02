import React from 'react';

const UpdatePersona = () => {
    return(
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Editar Persona
                        </h2>

                        <form>
                            <div className='form-group'>
                                <label>Nombre</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Nombre'
                                    name='name'
                                />
                            </div>

                            <div className='form-group'>
                                <label>Apellido</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Apellido'
                                    name='lastName'
                                />
                            </div>

                            <div className='form-group'>
                                <label>Edad</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Edad'
                                    name='age'
                                />
                            </div>

                            <div className='form-group'>
                                <label>Email</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Email'
                                    name='email'
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