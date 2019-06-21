import React, { Component } from 'react';
import AppNavBar from './components/AppNavbar';
import CharacterList from './components/CharacterList';
import CharacterModal from './components/CharacterModal';
import { Container } from 'shards-react';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavBar/>
        <Container>
          <CharacterModal/>
          <CharacterList/>
        </Container>
      </div>
      </Provider>
      );
  }
}

export default App;
