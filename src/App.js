import './App.css';
import NavBar from './components/nav/NavBar';
import Header from './components/header/Header';
import SearchPage from './components/SearchComponent/SearchPage';
import ParkInfoLayout from './components/parks/parkInfo/ParkInfoLayout'
import Webcam from './components/parks/parkInfo/webcam/Webcam';
import {BrowserRouter, Switch,Route,Link} from "react-router-dom";
import Footer from './components/footer/Footer';


function App() {


  return (
    
    <BrowserRouter>
      
      
      
           
        <Switch>
          
          <Route path="/about" component={ParkInfoLayout} />
          <Route path="/webcam" component={Webcam} />

            
          <Route path="/">
            <NavBar />
            <Header />
            <SearchPage />
          </Route>
        </Switch>

        
      <Footer />
      </BrowserRouter>
  );
}

export default App;
