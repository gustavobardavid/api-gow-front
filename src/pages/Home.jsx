import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../components/Header';
export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
      </Container>
    </>
   
  );
}