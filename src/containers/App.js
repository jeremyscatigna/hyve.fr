import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import Idea from '../components/Idea';
import Team from '../components/Team';
import News from '../components/News';
import Navbar from '../components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Route exact={true} path="/" component={Homepage} />
    <Route path="/idea" component={Idea} />
    <Route path="/team" component={Team} />
    <Route path="/news" component={News} />
  </div>
);

export default App;
