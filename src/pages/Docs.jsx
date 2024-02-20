import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

export default function Docs() {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex' }}>
      <Container>
        <h1>Docs</h1>
        <Typography textAlign="center" color='#fff' style={{fontFamily:'gow-font'}} >
        Lorem ipsum, dolor sit amet consectetur 
          adipisicing elit. Odio eaque fuga, cupiditate reiciendis
           nam sed explicabo,
           error id iusto aliquid eum tempore amet et neque. Assumenda eligendi laudantium sunt expedita!
          </Typography>
         

      </Container>
    </Container>
  );
}
