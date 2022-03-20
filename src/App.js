import Navbar from './Navbar/Navbar';
import Homepage from './HomePage/Homepage';
import Services from './HomePage/Services';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/Places'>
            <Navbar/>
          </Route>
          <Route path='/Stories'>
            <Navbar/>
          </Route>
          <Route path='/AboutUs'>
            <Navbar/>
          </Route>
          <Route path='/ContactUs'>
            <Navbar/>
          </Route>
          <Route path='/Login'>
            <Navbar/>
          </Route>
          <Route path='/'>
            <Navbar/>
            <Homepage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
