import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } 
                    from "react-router-dom";
import './css/styles.css';
import Home         from "./Home";
import Work         from "./Work";
import About        from "./About";
import Contact      from './components/Contact';
import NotFound     from "./NotFound";
import Header       from "./components/Header";
import RouterScroll      from './components/RouterScroll';
import Guitars      from "./projects/CherylGuitars";
import OAT          from "./projects/OAT";
import Portfolio    from "./projects/Portfolio";
import Movie  from "./projects/Movie";

class App extends Component {

 componentDidMount() {
    require("./scripts/menu-open.js"); 

    const $currentPath = window.location.pathname;

    if( $currentPath === '/'){
      require("./scripts/home-header.js");
    }else{
      require("./scripts/header-color-change.js");
    }

    // Correcting vh for mobile
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  

 render() {
   return  (
     <>
     <Header/>

     <Router>
      <RouterScroll>
       <div className="navwrap">
       <nav>
         <ul>
           <li>
             <Link exact={true} 
                   id="homelink"
                   to="/">
                   HOME
             </Link>
           </li>
           
           <li>
             <Link 
                   to="/work">
                   WORK
             </Link>
           </li>
         
           <li>
             <Link to="/about">
                   ABOUT
             </Link>
           </li>
           <li>
             <Link to="/about/#contact">
                   CONTACT
             </Link>
           </li>
         </ul>
       </nav> 
       </div>
       
       {/* Our router goes here */}
       <Switch> 
       <Route exact path="/" component={Home} />
       <Route exact path="/work" component={Work} />
       <Route path={'/about'} exact component={About}/>
       <Route path={'/about/#contact'} exact component={Contact}/>

       {/* Projects */}
       <Route exact path="/cheryl-guitars" component={Guitars} />
       <Route exact path="/oat" component={OAT} />
       <Route exact path="/portfolio" component={Portfolio} />
       <Route exact path="/movie" component={Movie} />

       {/* Shows an error page. */}
       <Route path="*" component={NotFound} />
       </Switch>
      </RouterScroll>
     </Router>
     </>
   ); 
  }     
}

export default App;
