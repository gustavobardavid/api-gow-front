import axios from 'axios';
import { useEffect, useState } from 'react';

export default fetchData = async () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    React.useEffect(() => {
        try {
          const response = await axios.get(
            `http://localhost:3000/v1/characters`
          );
          setCharacters(response.data);
          setLoading(false); 
        } catch (error) {
          console.error('Erro ao buscar personagens', error);
        }
        FetchData();
      }, []);
  };