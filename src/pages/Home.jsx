import Container from '@mui/material/Container';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Highlights from '../components/Highlights';
import Logos from '../components/Logos';
import Footer from '../components/Footer';
import Docs from '../components/Docs';
import Buttons from '../components/Buttons';

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
        <main>
         <Docs />
         <Buttons />
        </main>
      </body>
      <footer>
         <Footer />
      </footer>
     </> 
  );
}