import { Routes,Route } from 'react-router'
import './App.css'
import DashboardBuyer from './Buyer/DashboardBuyer'
import DashboardSeller from './Seller/DashboardSeller'
import SplashScreen from './SplashScreen'
import DashboardAdmin from './Dashboard/DashboardAdmin'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/DashboardBuyer' element={<DashboardBuyer />} />
        <Route path='/DashboardSeller' element={<DashboardSeller />} />
        <Route path='/DashboardAdmin' element={<DashboardAdmin />} />
      </Routes>
    </>
  )
}

export default App
