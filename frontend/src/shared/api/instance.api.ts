import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_BASE || 'http://localhost:5000/api';

// public instance
export const publicInstance = axios.create({
	baseURL: `${BASE_URL}`,
	withCredentials: true,
});
