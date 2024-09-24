import React, { useEffect, useReducer, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './components/Header';
import { useFetchUser } from './hooks/useFetchUser';


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

const Identifier = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const navigate = useNavigate();
    const inputEl = useRef(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const preventDefault = (event) => event.preventDefault();

    const { error, execute, isLoading, user } = useFetchUser(state.username);

    useEffect(() => {
        console.log(error);
        if (!isLoading && !error) {
            
            console.log(user);
            navigate('/signin/pwd');
        }
    // eslint-disable-next-line
    }, [isLoading]);


    useEffect(() => {
        const timer = setTimeout(() => inputEl.current.focus(), 200);
        return () => clearTimeout(timer);
    }, []);

    const onFieldChange = event => {
        dispatch({ type: 'field', key: event.target.name, value: event.target.value });
    };

    const fetchUser = async () => {
        execute();
    };

    return (
        <>
            <Header />
            <Box sx={{ padding: '2rem 0 0' }}>
                <TextField
                    autoComplete='off'
                    fullWidth
                    inputRef={inputEl}
                    label='Usuario'
                    name='username'
                    placeholder='Ingrese su usuario'
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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '2.5rem',
                    width: '100%' 
                }}
            >
                <Button color='primary' variant='text' >
                    Crear cuenta
                </Button>
                <Button color='primary' onClick={() => fetchUser()} variant='contained'>
                    Siguiente
                </Button>
            </Box>
        </>
    );
};

export default Identifier;