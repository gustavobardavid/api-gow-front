import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
  {
    title: 'Where does our data come from?',
    description: [
      'The data provided by the GoW API is sourced from various official and reputable sources related to the God of War game franchise. This includes information gathered from game developers, official websites, promotional materials, and licensed partners.'
    ]
  },
  {
    title: 'GoW API',
    description: [
      'The GoW API is an application programming interface that provides access to data related to the God of War game universe. This API allows developers to access a variety of information including characters, items, locations, enemies, story, and more.'
    ]
  },
  {
    title: 'What is GoW DB?',
    description: [
      'GoW DB is a API specifically designed to offer a wealth of information related to the God of War video game series. This platform serves as a comprehensive resource for fans, developers, and enthusiasts who seek detailed insights into the rich lore, characters, locations and items.'
    ]
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography style={{fontFamily:'gow-font'}} component="h2" variant="h4" color="#fff">
        What is GoW DB?
        </Typography>
        <Typography variant="body1" color="#fff" style={{fontFamily:'gow-font'}}>
        See some of the documentation
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            md={4}
          >
            <Card
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'GoW API' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'GoW API' ? '#fff' : undefined,
                background:
                  tier.title === 'GoW API'
                    ? '#000'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color:
                      tier.title === 'GoW API' ? '#fff' : '',
                  }}
                >
                  <Typography component="h3" variant="h6" style={{fontFamily:'gow-font'}}>
                    {tier.title}
                  </Typography>
                  
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      component="text"
                      style={{fontFamily:'gow-font', textAlign: 'left'}}
                      sx={{
                        color:
                          tier.title === 'GoW API'
                            ? '#fff'
                            : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}