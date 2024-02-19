import * as React from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import { Grid } from '@mui/material';

export default function Characters() {
    const [loading, setLoading] = React.useState(true);
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:3000/v1/characters`
            );
            setCharacters(response.data);
            setLoading(false); 
          } catch (error) {
            console.error('Erro ao buscar personagens', error);
          }
        };
    
        fetchData();
      }, []);

      if (loading) {
        return <div className="loading">Carregando...</div>;
      }return (
        <Grid container spacing={2}>
      {characters.map(character => (
        <Grid key={character.id} item xs={12} sm={6} md={4} lg={3}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
    );
}

