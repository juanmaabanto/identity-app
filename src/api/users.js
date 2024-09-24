
import axios from 'axios';
import { IdentityUrl } from '../config';

export const fetchUser = async (username) => {
    const url = `${IdentityUrl}/signin/user/lookup`;
    const { data } = axios.post(url, `username=${username}`, { headers: {'Accept': 'application/json'} });

    return data;
};