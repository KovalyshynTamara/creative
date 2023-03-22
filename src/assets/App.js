import './../assets/css/App.scss';
import Navigation from '../assets/components/common/Navigation';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/common/Header'
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation />
      <Outlet/>
      <Footer />
      
      <ScrollToTop/>

    </div>
  );
}

export default App;
