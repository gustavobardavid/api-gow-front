import * as React from 'react';
import axios from 'axios';
import GameCard from '../components/GameCard';
import { Grid } from '@mui/material';
import api from '../js/environments';

export default function Games() {
    const [loading, setLoading] = React.useState(true);
    const [games, setGames] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              `${api}/games`
              );
            setGames(response.data);
            setLoading(false); 
          } catch (error) {
            console.error('Erro ao buscar jogos', error);
          }
        };
    
        fetchData();
      }, []);

      if (loading) {
        return <div className="loading">Carregando...</div>;
      }return (
        <div>
          <h1>Games</h1>
        <Grid container spacing={2}>
      {games.map(game => (
        <Grid key={game.id} item xs={12} sm={6} md={4} lg={3}>
         <GameCard game={game} />
        </Grid>
      ))}
    </Grid>
      </div>
    );
}

