import { Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/custom/Header";
import { Toaster } from "sonner";

function App() {
  // checking if the user is signed in or not using useUser() func
  const { user, isLoaded, isSignedIn } = useUser();

  if (isLoaded && !isSignedIn) {
    return <Navigate to={"/auth/sign-in"} />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
}

export default App;
