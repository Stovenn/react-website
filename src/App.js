import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, AboutUs, Products, PageNotFound, ProductDetails } from "./Pages";
import { Navbar } from "./components/Navbar/Navbar";
import GlobalFonts from "./assets/fonts/fonts"
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./Pages/Profile/Profile";

function App() {
  const [isAuth, setIsAuth] = React.useState(false)
  return (
    <Router>
      <GlobalFonts />
      <Navbar />
      <Switch>
        <Route path="/" component={(props) => <Home {...props} isAuth={isAuth} />} exact />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/products" component={Products} exact />
        <Route path="/products/:id" component={ProductDetails} exact />
        <Route path="/login" render={(props) => <Login {...props} login={setIsAuth} />}  exact/> 
        <ProtectedRoute path="/profile" component={Profile} isAuth={isAuth} exact/>
    
        <Route path="*" component={PageNotFound} />
       
      </Switch>

    </Router>
  );
}

export default App;
