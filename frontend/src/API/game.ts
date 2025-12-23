import axiosInstance from './axiosInstance';

export const getGames =
  async (id?: string) => {
    console.log('id', id);
    
    try {
      const url = id ? `games/${id}` : 'games';
      const response = await axiosInstance.get(url); return response.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  }
