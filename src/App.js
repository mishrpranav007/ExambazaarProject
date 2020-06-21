import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './Containers/LandingScreen/Landing';
import {Questions} from './Components/QuestionPage/questions';
import NavigationBar from './Components/Navbarcomponent/NavigationBar';
import Sidebar from './Components/SidebarComponent/Sidebar';

function App() {
  return (
     
        <React.Fragment>
         <Router>
           <NavigationBar />
           <Sidebar />
           
          

          <Switch>
             <Route exact path="/" component={Landing}></Route>
             <Route path="/about" component={Questions}></Route>
             
          </Switch>
        </Router>
      </React.Fragment>
   
  );
}

export default App;
