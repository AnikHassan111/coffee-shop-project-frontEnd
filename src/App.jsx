import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <ul className='flex gap-5'>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/addcoffee'}>Add Coffee</Link></li>
      <li><Link to={'/updatecoffee'}> Update Coffee</Link></li>
    </ul>

    <div>
      <Outlet></Outlet>
    </div>
      
    </>
  )
}

export default App
