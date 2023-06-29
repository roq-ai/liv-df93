import axios from 'axios';
import queryString from 'query-string';
import { RegisteredUserInterface, RegisteredUserGetQueryInterface } from 'interfaces/registered-user';
import { GetQueryInterface } from '../../interfaces';

export const getRegisteredUsers = async (query?: RegisteredUserGetQueryInterface) => {
  const response = await axios.get(`/api/registered-users${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createRegisteredUser = async (registeredUser: RegisteredUserInterface) => {
  const response = await axios.post('/api/registered-users', registeredUser);
  return response.data;
};

export const updateRegisteredUserById = async (id: string, registeredUser: RegisteredUserInterface) => {
  const response = await axios.put(`/api/registered-users/${id}`, registeredUser);
  return response.data;
};

export const getRegisteredUserById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/registered-users/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRegisteredUserById = async (id: string) => {
  const response = await axios.delete(`/api/registered-users/${id}`);
  return response.data;
};
