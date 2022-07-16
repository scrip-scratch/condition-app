import './App.css';
import Footer from './components/UI/Footer';
import Navbar from './components/UI/navbar/Navbar';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { check } from './http/userAPI';
import Spinner from './components/UI/spinner/Spinner';
import { Context } from '.';

const  App = observer (() => {

  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(() => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
})

export default App;
