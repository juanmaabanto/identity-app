import React, { useReducer, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';

const initialState = {
    username: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'field':
            return {
                ...state,
                [action.key]: action.value
            };
        default:
            return state;
    }
};

const Password = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const navigate = useNavigate();
    const inputEl = useRef(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const preventDefault = (event) => event.preventDefault();

    const onFieldChange = event => {
        dispatch({ type: 'field', key: event.target.name, value: event.target.value });
    };

    const fetchUser = async () => {
        console.log('fetch');
        navigate('/signin/identifier')
    };

    return (
        <>
            <Box
                sx={{
                    color: 'text.primary',
                    fontSize: '1.375rem',
                    fontWeight: 500,
                    lineHeight: 1.167,
                    textAlign: 'center'
                }}
            >
                Bienvenido JM
            </Box>
            <Box
                sx={{
                    color: 'text.primary',
                    fontSize: '1rem',
                    lineHeight: 1.2,
                    paddingTop: '0.5rem',
                    textAlign: 'center'
                }}
            >
                Ingresa tus credenciales
            </Box>
            <Box sx={{ padding: '2rem 0 0' }}>
                <TextField
                    autoComplete='off'
                    fullWidth
                    inputRef={inputEl}
                    label='Contraseña'
                    name='username'
                    placeholder='Ingrese su contraseña'
                    value={state.username}
                    variant={matches ? 'outlined' : 'standard'}
                    onChange={onFieldChange}
                    onKeyPress={(event) => {if(event.key === 'Enter') fetchUser()}}
                    inputProps={{
                        maxLength: 50
                    }}
                />
                <Box sx={{ mt: { xs: '1rem', sm: '0.5rem' } }}>
                    <Link sx={{ fontSize: '0.875rem', fontWeight: 500 }} href='#' underline='none' onClick={preventDefault}>
                        ¿Olvidaste el usuario?
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default Password;