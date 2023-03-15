import './App.css';
import Ask from './Pages/Ask.js';
import Navbar from './Components/navbar/navbar.js';
import LoginPage from './Pages/Login.js';
import Answer from './Pages/Answer.js';
import HomePage from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

export const authContext = createContext();

function App() {
  return (
    <Router>
      <ProvideAuth>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/ask">
              <Ask />
            </Route>
            <Route path="/me">
              <Dashboard />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/answer/:id">
              <Answer />
            </Route>
            <Route path="/">
              <h1 style={{ marginTop: "200px" }}>
                <HomePage />
              </h1>
            </Route>
          </Switch>
        </div>
      </ProvideAuth>
    </Router>
  );
}

function ProvideAuth({ children }) {
  const auth = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}


export default App;
