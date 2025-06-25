import { Route, Routes, useLocation } from 'react-router-dom';
import '../src/styles/globals/colors.css'
import '../src/styles/globals/reset.css'
import '../src/styles/globals/typography.css'
import '../src/styles/globals/util.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Header from './components/Header';
import Tables from './pages/Tables';
import Menu from './pages/Menu';

function App() {

  const location = useLocation();
  const hideHeaderRoutes = ["/login"];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  )
}

export default App
