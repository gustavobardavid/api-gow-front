import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const dataButtons = [
    { label: 'Characters', color: 'primary', href: '/characters' },
    { label: 'Items', color: 'error', href: '/items' },
    { label: 'Enemies', color: 'error', href: '/enemies' },
    { label: 'Games', color: 'secondary', href: '/games' },
];

const buttonStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px'
};

export default function buttonCollection() {
  const theme = useTheme();
  const buttons = dataButtons;

  return (
    <Box id="buttonCollection" sx={{ py: 4 }}>
      <Typography
        variant="h5"
        align="center"
        color="#fff"
        style={{fontFamily:'gow-font'}}
      >
        Search our Database
      </Typography>
      <Grid container justifyContent="center" spacing={2} sx={{ mt: 0 }}>
        {buttons.map((button, index) => (
          <Grid item key={index}>
            <Link to={button.href} style={{ textDecoration: 'none' }}> 
              <Button variant="contained" color="error" style={{fontFamily:'gow-font'}}>
                {button.label}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}