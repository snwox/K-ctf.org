import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Main } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
