import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {
  Link,
} from 'react-router-dom';
import Header from '../components/Header';
import '../index.css';

class Home extends Component {
  render() {
    return (
      <Header title="AMAZING RECIPES">
        <Link to="/recipes" className="search-link-btn">
          <Button
            variant="contained"
            color="primary"
            className="search-btn"
          >
            Search Recipe
          </Button>
        </Link>
      </Header>
    );
  }
}
export default Home;
