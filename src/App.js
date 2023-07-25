import './App.css';
import Footer from './Components/Footer';
import GreateSince from './Components/GreateSince';
import HappyClient from './Components/HappyClient';
import HeroHeadline from './Components/HeroHeadline';
import HowCanWeHelp from './Components/HowCanWeHelp';
import NewsLetter from './Components/NewsLetter';
import OurClient from './Components/OurClient';
import TopMenu from './Components/TopMenu';

function App() {
  return (
    <div className="App">
     <TopMenu />
     <HeroHeadline />
     <OurClient />
     <HowCanWeHelp />
     <GreateSince />
     <HappyClient />
     <NewsLetter />
     <Footer />
    </div>
  );
}

export default App;
