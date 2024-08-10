import './components/partials/navbar/NavbarMantine.module.css';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getTokenFromLocalStorage } from './utils/localstorage.helper';
import { setToken } from './store/modules/auth/action';
import { useDispatch, useSelector } from 'react-redux';
import { WelcomeLayout } from './Layouts/WelcomeLayout';
import { AuthLayout } from './Layouts/AuthLayout';
import { DashboardLayout } from './Layouts/DashboardLayout';

function App() {
  const token = useSelector((state) => state.tokenReducer.token);
  const dispatch = useDispatch();
  const isLoggedIn = getTokenFromLocalStorage();

  // Initialize token from local storage to Redux state if not already set
  if (isLoggedIn && token === '') {
    dispatch(setToken(isLoggedIn));
  }

  return (
    <>
    <WelcomeLayout/>
      {/* <Routes>
        <Route path="/" element={<WelcomeLayout />} />
      
        <Route path="/auth/*" element={token === '' ? <AuthLayout /> : <Navigate to="/" />} />
      
        <Route path="/dashboard/*" element={token !== '' ? <DashboardLayout /> : <Navigate to="/" />} />
      </Routes> */}
    </>
  );
}

export default App;
