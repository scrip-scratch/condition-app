import './App.css';
import Footer from './components/UI/Footer';
import Navbar from './components/UI/navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './routes/AppRouter';

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
