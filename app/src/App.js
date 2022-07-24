import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/home';
import Blogs from './components/pages/blogs';
import Diseaseprediction from './components/pages/diseaseprediction';
import Diseases from './components/pages/diseases';
import SelectedBlog from './components/pages/selectedblog';
import {AnimatePresence} from 'framer-motion';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
          <NavBar />
          <Route render={({location}) => (
            <AnimatePresence exitBeforeEnter>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/diseaseprediction" exact component={Diseaseprediction} />
                    <Route path="/diseases"  exact component={Diseases} />
                    <Route path="/blogs"  exact component={Blogs} />
                    <Route path="/blogs/one" component={SelectedBlog}/>
                  </Switch> 
            </AnimatePresence> 
          )} />
      </Router>
  );
}

export default App;
