import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Accueil} from "./pages/Accueil";
import Service from "./pages/Service";
import {Cabinet} from "./pages/Cabinet";
import {Contact} from "./pages/Contact";
import {Error} from "./pages/Error";
import {Layout} from "./components/Layout";
import {NavigationBar} from './components/NavigationBar';
import {Slider} from './components/Slider';
//import {Slidershow} from './Slidershow';

function App() {
  return (
    
    <React.Fragment>

      <NavigationBar/>
      <Slider/>
      <Layout>

<Router>
      <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/service" component={Service}/>
          <Route exact path="/cabinet" component={Cabinet}/>
          <Route exact path="/contact" component={Contact} />
          <Route component={Error}/>

     </Switch>
</Router> 
</Layout>
    </React.Fragment>

  );
}

export default App;
