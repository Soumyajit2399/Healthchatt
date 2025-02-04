import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Verify from './pages/Verify';
import { UserData } from './context/UserContext';
import { LoadingBig } from './components/Loading';

const App = () => {
  const {user, isAuth, loading} = UserData()
  return (
    <>
      {loading? (
        <LoadingBig />
      ) : <BrowserRouter>
        <Routes>
          <Route path = "/" element = { isAuth?<Home /> : <Login/>}/>
          <Route path = "/Login" element = { isAuth?<Home /> : <Login />}/>
          <Route path = "/verify" element = { isAuth?<Home /> : <Verify />}/>
        </Routes>
      </BrowserRouter>}
      
    </>
  )
}

export default App;