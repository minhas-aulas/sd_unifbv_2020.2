import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Menu from './components/Menu'
import Card from './components/MyCard'
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <Menu />
      <Container style={{ marginTop: 15 }}>
        <Typography gutterBottom variant="h4" component="h2">
          O que você prefere?
        </Typography>
        <Grid container style={{flexGrow: 1}} spacing={2}>
          <Grid item xs={6}>
            <Grid container justify="center" spacing={1}>
              <Card imgUrl="/static/images/beer.jpg"
                  title="Cerveja" count_type="beers" params={{ beer: 1}} />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container justify="center" spacing={1}>
              <Card imgUrl="/static/images/milk.jpg"
                  title="Leite" count_type="milks" params={{ milk: 1 }}  />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
