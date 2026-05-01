import apiClient from './apiClient';
import type { Word } from '@/lib/NewSubmittedWord';

export const wordService = {
  getAll: async (): Promise<Word[]> => {
    const response = await apiClient.get('/word_list');
    return response.data;
  },

  getById: async (id: string): Promise<Word> => {
    const response = await apiClient.get(`/word_list/${id}`);
    return response.data;
  },

  create: async (word: Omit<Word, 'id'>): Promise<Word> => {
    const response = await apiClient.post('/add_word', word);
    return response.data;
  },

  update: async (word: Partial<Word>): Promise<Word> => {
    const response = await apiClient.patch(`/update_word/`, word);
    return response.data;
  },

  delete: async (word: string): Promise<void> => {
    await apiClient.delete(`/delete_word/${word}`);
  },
  getByFilter: async (word: string, category: string, difficulty: string, gameType: string): Promise<Word[]> => {
    const response = await apiClient.get(`/word_list/`, 
        {
            params: { word, category, difficulty, gameType }
        }
    );
    return response.data;
  }
};   