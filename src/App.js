import './App.css';
import Investment from './Components/Investment';
import Landing from './Components/Landing';
import Navbar from './Navbar';
import InvestmentDetails from './Components/InvestmentDetails';
import UsersTweets from './Components/UsersTweets';
import WhyMantra from './Components/WhyMantra';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Navbar title='Mantra Money'/>
    <Landing />
    <Investment />
    <InvestmentDetails/>
    <UsersTweets />
    <WhyMantra />
    <Footer />
    </>
  );
}

export default App;
