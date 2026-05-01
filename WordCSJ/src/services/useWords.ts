// import { useState, useEffect } from 'react';
// import type { Word } from '@/lib/NewSubmittedWord';
// import { wordService } from '../services/wordService';

// export const useWords = () => {
//   const [words, setWords] = useState<Word[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchWords = async () => {
//       try {
//         setLoading(true);
//         const data = await wordService.getAll();
//         setWords(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'Failed to fetch words');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWords();
//   }, []);

//   const refetch = async () => {
//     try {
//       console.log("refetch")
//       setError(null);
//       setLoading(true);
//       const data = await wordService.getAll();
//       setWords(data);
//       console.log(data);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to fetch words');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const create = async (word:Word) => {
//     try {
//       setError(null);
//       setLoading(true);
//       await wordService.create(word);
//       await refetch();
//       console.log(words)
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to fetch words');
//     } finally {
//       setLoading(false);
//     }
//   }

//   return { words, loading, error, refetch, create };
// };   