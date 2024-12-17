import React from 'react';
import { Button, Typography, Container, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#ffffff',
    padding: theme.spacing(4),
    animation: '$fadeIn 1s ease-out',
    position: 'relative',
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    animation: '$slideDown 1s ease-out',
    textShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  button: {
    animation: '$slideUp 1s ease-out',
    backgroundColor: '#4CAF50',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#45a049',
      transform: 'translateY(-2px)',
    },
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  '@keyframes slideDown': {
    from: { transform: 'translateY(-50px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
  },
  '@keyframes slideUp': {
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
  },
  creditsContainer: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  creditsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  credit: {
    fontWeight: 600,
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
    transition: 'color 0.3s ease',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h3" className={classes.title} gutterBottom>
        UML DIAGRAM EDITOR
      </Typography>

      <Typography variant="body1" className={classes.paragraph} gutterBottom>
        Create and edit UML diagrams with ease.
      </Typography>

      <Button
        variant="contained"
        className={classes.button}
        component={Link}
        to="/editor"
      >
        Start Editing
      </Button>

      <Box className={classes.creditsContainer}>
        <Typography variant="subtitle1" gutterBottom>
          Made by:
        </Typography>
        <Box className={classes.creditsList}>
          <Typography variant="body2" className={classes.credit}>AITALI YASSIR</Typography>
          <Typography variant="body2" className={classes.credit}>ELKHANTOURI BILAL</Typography>
          <Typography variant="body2" className={classes.credit}>ELHARCHI MOHAMMED AMINE</Typography>
          <Typography variant="body2" className={classes.credit}>MOHAMMED YASSINE OUHADI</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
