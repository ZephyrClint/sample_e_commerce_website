import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import TeamLeads from './components/TeamLeads';
import Main from './components/Main';
import SignUp from './components/SignUp';
import GiftBasket from './components/GiftBasket';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (

      <div>
        <NavigationBar/>
        <SignUp/>
        <GiftBasket/>
        <Footer/>

        {/* <TeamLeads/>
        <Main/> */}

      </div>
  );
}

export default App;
