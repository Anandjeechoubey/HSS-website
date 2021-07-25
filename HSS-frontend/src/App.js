import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "pages/about";
import Academics from "pages/academics";
import Events from "pages/events";
import Facilities from "pages/facilities";
import People from "pages/people";
import Research from "pages/research";
import Home from "pages/home";
import Workshops from "pages/workshops";
import NavBar from "components/navbar";
import Footer from "components/footer";
import Talks from "pages/talks";
import AwardsAndHonors from "pages/awardsAndHonors";
import EconomicDB from "pages/economicDB";
import DeptLibrary from "pages/deptLibrary";
import Scholars from "pages/scholars";
import Faculty from "pages/faculty";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/academics" component={Academics} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/facilities" component={Facilities} />
        <Route exact path="/facilities/economic-database" component={EconomicDB} />
        <Route exact path="/facilities/departmental-library" component={DeptLibrary} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/workshops" component={Workshops} />
        <Route exact path="/events/talks" component={Talks} />
        <Route exact path="/events/awards-and-honors" component={AwardsAndHonors} />
        <Route exact path="/people" component={People} />
        <Route exact path="/people/research-scholars" component={Scholars} />
        <Route exact path="/people/faculty" component={Faculty} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
