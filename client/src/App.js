import React, { Component } from 'react';
import AppNavBar from './components/AppNavbar';
import CharacterList from './components/CharacterList';
import CharacterModal from './components/CharacterModal';
import HeaderIntro from './components/HeaderIntro';
import MainTeam from './components/MainTeam';
import FooterPage from './components/FooterBar';
import { Container } from 'shards-react';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App" align="center">
        <AppNavBar/>
        <HeaderIntro/>
        <MainTeam/>
      </div>
        <Container>
          <CharacterModal/>
          <CharacterList/>
        </Container>
        <FooterPage/>
      </Provider>
      );
  }
}

export default App;
