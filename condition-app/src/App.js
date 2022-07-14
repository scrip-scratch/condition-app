import './App.css';
import Footer from './components/Footer';
import Navbar from './components/UI/navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {

  

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
