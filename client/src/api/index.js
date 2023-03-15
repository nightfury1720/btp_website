import axios from 'axios';

const url = "http://localhost:5000/api";

export const askquestion = (question) => axios.post(`${url}/question`, question);

export const login = (user) => axios.post(`${url}/login`, user);

export const getAllPosts = () => axios.get(`${url}`);

export const answer = (answer) => axios.post(`${url}/answer`, answer);

export const updateUserDetails = (details) => axios.post(`${url}/updateUserDetail`, details);