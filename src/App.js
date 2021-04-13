//import logo from './logo.svg';
import './App.css';
import Signin from './Components/Auth/SignIn/Signin';
import Signup from './Components/Auth/SIgnUp/Signup';
import HomeHeader from './Components/Router/Header/HomeHeader'


function App() {
  return (
    <div>
      
      <HomeHeader />
      {/* <Signup /> */}
      <Signin />

    </div>
  );
}

export default App;
