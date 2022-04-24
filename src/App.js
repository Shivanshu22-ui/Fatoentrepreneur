import Navbar from "./Navbar/Navbar";
import Homepage from "./HomePage/Homepage";
import Places from "./Places/Places";
import Contact from "./Contact/Contact";
import Stories from "./Stories/Stories";
import About from "./About/About";
import PlacesInfo from "./Places/PlacesInfo/PlacesInfo";
import LoginPage from "./LoginSignup/LoginPage";
import PlaceDetails from "./Places/PlacesInfo/PlaceDetails/PlaceDetails";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./LoginSignup/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Places">
            <Navbar />
            <Places />
          </Route>
          <Route path="/placesInfo">
            <Navbar />
            <PlacesInfo />
          </Route>
          <Route path="/Stories">
            <Navbar />
            <Stories />
          </Route>
          <Route path="/AboutUs">
            <Navbar />
            <About />
          </Route>
          <Route path="/ContactUs">
            <Navbar />
            <Contact />
          </Route>
          <Route path="/Login">
            <Navbar />
            {/* <LoginPage/> */}
            <PlaceDetails />
          </Route>
          <Route path="/">
            <Navbar />
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
