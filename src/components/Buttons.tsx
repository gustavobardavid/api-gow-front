import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import { Button } from '@mui/material';

const dataButtons = [
    { label: 'Characters', color: 'primary', href: '/characters' },
    { label: 'Games', color: 'secondary', href: '/games' },
    { label: 'Items', color: 'error', href: '/items' },
];

const buttonStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
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
      <Grid container justifyContent="center" spacing={2} sx={{ mt: 0.5, opacity: 0.6 }}>
        {buttons.map((button, index) => (
          <Grid item key={index}>
            <Button variant="contained" color="error" style={{fontFamily:'gow-font'}}>
              {button.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}