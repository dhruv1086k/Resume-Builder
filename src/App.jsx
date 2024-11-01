import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import { useUser } from '@clerk/clerk-react'

function App() {

  // checking if the user is signed in or not using useUser() func
  const {user, isLoaded, isSignedIn} = useUser();

  if(isLoaded && !isSignedIn){
    return <Navigate to={'/auth/sign-in'}/>
  }
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
