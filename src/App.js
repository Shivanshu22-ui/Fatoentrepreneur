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
import UserDashBoard from "./DashBoard/UserDashBoard";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./LoginSignup/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/Places">
            {/* <Places /> */}
            <UserDashBoard/>
          </Route>
          <Route exact path="/city/:cityName">
            <PlacesInfo />
          </Route>
          <Route exact path="/Stories">
            <Stories />
          </Route>
          <Route exact path="/AboutUs">
            <About />
          </Route>
          <Route exact path="/ContactUs">
            <SingleStory/>
            {/* <Contact /> */}
          </Route>
          <Route exact path="/Login">
            {/* <LoginPage/> */}
            <PlaceDetails />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
