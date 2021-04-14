//import logo from './logo.svg';
import './App.css';

import Signin from './Components/Auth/SignIn/Signin';
import Signup from './Components/Auth/SIgnUp/Signup';
import HomeHeader from './Components/Router/Header/HomeHeader'

import { TimeRoutes } from './Components/Pages/Time/TimeRoutes_/TimeRoutes.jsx';
import { ProjectDisR } from './Components/Pages/ProjectDisplayR/ProjectDisR';





function App() {
  return (
    <div>


      
      <HomeHeader />
      {/* <Signup /> */}
      <Signin />

 
   <TimeRoutes/>
   
    



    </div>
  );
}

export default App;
