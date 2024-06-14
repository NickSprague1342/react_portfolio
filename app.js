import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './pages/home.js';
import PortfolioPage from './pages/portfolio.js';

function App() {
return (
    <Router>
    <div className="App">
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={PortfolioPage} />
          {}
        </Switch>
        <Footer />
    </div>
    </Router>
);
}

export default App;