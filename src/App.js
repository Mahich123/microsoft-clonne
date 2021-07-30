import './App.css';
import Gamepass from './components/Gamepass';
import Header from './components/Header';
import Hero from './components/Hero';
import Section1 from './components/Section1'
import Section2 from './components/Section2';
import Section3 from './components/Section3'
import Cov from './components/Cov'
import Team from './components/Team';
import Social from './components/Social';
import Footer1 from './components/Footer1';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Covid from './components/Covid';
import CovSection1 from './components/CovSection1';
import CovSection2 from './components/CovSection2';
import CovSection3 from './components/CovSection3';
import CovSection4 from './components/CovSection4';
import CovSection5 from './components/CovSection5';
import CovSection6 from './components/CovSection6';
import CovSection7 from './components/CovSection7';




function App() {
  return (
   
   
    <div className="App">
    <Router>
    
      <Header />
      <Switch>
      <Route path="/covid">
            <Covid />
            <CovSection1 />
            <CovSection2 />
            <CovSection3 />
            <CovSection4 />
            <CovSection5 />
            <CovSection6 />
            <CovSection7 />
            <Footer1 />
      </Route>
     
    <Route path="/">
      <Hero />
      <Section1 />
      <Section2 />
      <Gamepass />
      <Section3 />
      <Cov />
      <Team />
      <Social />
      <Footer1 />
      </Route>
      </Switch>
      </Router> 
    </div>
    
   
  );
}

export default App;
