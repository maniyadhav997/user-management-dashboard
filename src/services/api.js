import axios from 'axios';

export const fetchUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};

export const addUser = (user) => {
  return axios.post('https://jsonplaceholder.typicode.com/users', user);
};

export const updateUser = (user) => {
  return axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
};

export const deleteUser = (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
};
