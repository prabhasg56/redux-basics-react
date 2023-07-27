import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
  const isLoggedin = useSelector((state)=>state.auth.isAuthenticated);
  
  return (
    <>
    <Header/>
    {!isLoggedin && <Auth/>}
    {isLoggedin && <UserProfile/>}
    <Counter />
    </>
  );
}

export default App;
