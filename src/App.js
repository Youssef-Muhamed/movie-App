import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './home/Home';
import NotFound from './NotFound';
import Show from './show/Show';
import Fave from './fave/Fave';

function App() {
  return (
    <>
   <BrowserRouter>
        <Navbar />
        <Switch> 
        
          <Route exact path={"/"} component={Home } />
          <Route exact path={"/show/:id"} component={Show } />
          <Route exact path={"/fav"} component={Fave } />
          <Route exact path={"*"} component={NotFound} />
        </Switch>
      </BrowserRouter> 
    </> 
  )
}

export default App;
