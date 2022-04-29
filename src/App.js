import Navbar from "./Navbar/Navbar";
import Homepage from "./HomePage/Homepage";
import Places from "./Places/Places";
import Contact from "./Contact/Contact";
import Stories from "./Stories/Stories";
import About from "./About/About";
import PlacesInfo from "./Places/PlacesInfo/PlacesInfo";
import LoginPage from "./LoginSignup/LoginPage";
import PlaceDetails from "./Places/PlacesInfo/PlaceDetails/PlaceDetails";
import SingleStory from "./Stories/SingleStory/SingleStory";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./LoginSignup/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Places">
            <Navbar />
            <Places />
          </Route>
          <Route exact path="/city/:cityName">
            <Navbar />
            <PlacesInfo />
          </Route>
          <Route exact path="/Stories">
            <Navbar />
            <Stories />
          </Route>
          <Route exact path="/AboutUs">
            <Navbar />
            <About />
          </Route>
          <Route exact path="/ContactUs">
            <Navbar />
            <SingleStory/>
            {/* <Contact /> */}
          </Route>
          <Route exact path="/Login">
            <Navbar />
            {/* <LoginPage/> */}
            <PlaceDetails />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
