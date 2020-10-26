import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Home";
import Connexion from "./Connexion/Connexion";
import Inscription from "./Inscription/Inscription";
import Barmenu from './Menubar';
import Footer from './Footer';
import './App.css';


class App extends Component {


  render() {
    return (
        <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </header>
      <body className="App-body">
        <div className="corps">
        <Router>
          <Barmenu />
          <Route exact path="/" component={Home} />
          <Route path="/Inscription" component={Inscription} />
          <Route path="/Connexion" component={Connexion} />
          <Footer />
        </Router>
               </div>
      </body>
    </div>
    );
  }
}
export default App;
