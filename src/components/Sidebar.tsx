import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import IntroductionPage from './IntroductionPage';
import GettingStartedPage from './GettingStartedPage';
import RestPage from './RestPage';

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Intro',
    description:
      'Welcome to the documentation of the Potter DB: API! Dive into the magical world of Harry Potter with access to characters, books, spells, and more. Whether you are a developer building a Potter-themed app or just a curios fan, this documentation will guide you through the secrets of our API.',
      subDescription: 'The Potter DB: API is a REST and GraphQL-based interface to a vast repository of data from the wizarding world of Harry Potter. We take care of the data, so you can focus on building your app. With this API, you can: Retrieve detailed information about your beloved characters, including their backgrounds, house affiliation, and more. Explore a comprehensive list of spells and potions used in the wizarding world. Get thorough details about the books and movies of the Harry Potter universe.',
      data: 'Books	7 Characters	4631 Movies	11 Potions	163 Spells	315'
    },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Getting Started',
    description:
      'This item could provide information about the mobile app version of the product.',
    
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'REST',
    description:
      'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.'
  },
];

export default function Sidebar() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="Sidebar" sx={{ py: { sm: 'none' } }}>
      <Grid container>
        <Grid item md={2}>
          <Grid container item gap={1} sx={{ display: { sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: '#fff',
                  backgroundColor: '#fff',
                }}
              />
            ))}
          </Grid>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                    height: 'fit-content',
                    width: '100%',
                    backgroundColor: '#640000',
                    borderColor: '#640000',
                    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)',
                    borderRadius: '5px', 
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#A9A9A9' 
                    },
                    border: 'none'
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 1.5,
                  }}
                >
                  <div>
                    <Link
                      color="#fff"
                      variant="caption"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        fontFamily: 'gow-font',
                        '& > svg': { transition: '0.2s' },
                        '&:hover': { transform: 'translateX(2px)', color:'#000', textDecoration:  'none' },
                        '&.Mui-selected': { 
                            backgroundColor: '#000',
                            color: '#fff',
                          },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>{title}</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </div>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
              textAlign: 'left',
                backgroundColor: '#640000',
                boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)', 
            }}
          >
                {selectedItemIndex === 0 && <IntroductionPage />}
                {selectedItemIndex === 1 && <GettingStartedPage />}
                {selectedItemIndex === 2 && <RestPage />}
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
