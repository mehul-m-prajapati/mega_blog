import { useEffect, useState } from 'react'
import './App.css'
import conf from './conf/conf'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice'
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then(userData => {
        if (userData)
            dispatch(login({userData}));
        else
            dispatch(logout());
    })
    .catch(err => console.log('get user err', err))
    .finally(() => setLoading(false))
  }, []);

  return !loading ?
        (
            <div className='min-h-screen flex justify-center bg-gray-300'>
                <div className='block'>
                    <Header />
                        <main>
                            <Outlet />
                        </main>
                    <Footer />
                </div>
            </div>
        ) :
        (<>
            <p>Loading...</p>
        </>)
}

export default App
