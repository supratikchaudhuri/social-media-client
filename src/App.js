import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {PostContextProvider} from "./context/postContext.js"

import {Container} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";

function App() {
  return (
    <BrowserRouter>
    <PostContextProvider>
      {/* <Auth/> */}
      <Container maxWidth="lg">
        <Navbar/>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/auth" exact component={Auth}/>
        </Switch>

      </Container>

      </PostContextProvider>
    </BrowserRouter>
  );
}

export default App;
