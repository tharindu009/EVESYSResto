import { Route, Routes } from 'react-router-dom';
import '../src/styles/globals/colors.css'
import '../src/styles/globals/reset.css'
import '../src/styles/globals/typography.css'
import '../src/styles/globals/util.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  )
}

export default App
