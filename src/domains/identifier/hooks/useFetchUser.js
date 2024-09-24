import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../../../api/users';

export const useFetchUser = (username) => {
    const [isEnabled, setEnabled] = useState(false);
    const [user, setUser] = useState({});
    const {data = {}, error, isLoading, isSuccess } = useQuery(
        ['getUser', username],
        () => fetchUser(username),
        {
            enabled : isEnabled
        }
    );

    const execute = () => setEnabled(true);

    useEffect(() => {
        if (isSuccess) {
            setEnabled(false)
            setUser(data)
        }
    }, [data, isSuccess]);

    return {
        error,
        execute, 
        isLoading,
        user
    }
}