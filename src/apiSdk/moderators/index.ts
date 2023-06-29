import axios from 'axios';
import queryString from 'query-string';
import { ModeratorInterface, ModeratorGetQueryInterface } from 'interfaces/moderator';
import { GetQueryInterface } from '../../interfaces';

export const getModerators = async (query?: ModeratorGetQueryInterface) => {
  const response = await axios.get(`/api/moderators${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createModerator = async (moderator: ModeratorInterface) => {
  const response = await axios.post('/api/moderators', moderator);
  return response.data;
};

export const updateModeratorById = async (id: string, moderator: ModeratorInterface) => {
  const response = await axios.put(`/api/moderators/${id}`, moderator);
  return response.data;
};

export const getModeratorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/moderators/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteModeratorById = async (id: string) => {
  const response = await axios.delete(`/api/moderators/${id}`);
  return response.data;
};
