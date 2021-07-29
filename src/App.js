import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import IngredientsList from './containers/IngredientsList';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/ingredients/:id" component={IngredientsList} />
      </Router>
    </div>
  );
}

export default App;
