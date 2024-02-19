import Container from '@mui/material/Container';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
     <>
     <body>
     <header>  
        <Header />
     </header>
        <div className='hero'>
            <Hero  />
        </div>
        <div>
        </div>
     </body>
     </> 
  );
}