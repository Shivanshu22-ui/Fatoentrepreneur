import Navbar from './Navbar/Navbar';
import Homepage from './HomePage/Homepage';
import Places from './Places/Places';
import Contact from './Contact/Contact';
import Stories from './Stories/Stories';
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
            <Places/>
          </Route>
          <Route path='/Stories'>
            <Navbar/>
            <Stories/>
          </Route>
          <Route path='/AboutUs'>
            <Navbar/>
          </Route>
          <Route path='/ContactUs'>
            <Navbar/>
            <Contact/>
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
