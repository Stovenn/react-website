import React from "react";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import { Home, AboutUs, Hiraganas, PageNotFound, ProductDetails } from "./Pages";
import { Navbar } from "./components/Navbar/Navbar";
import GlobalFonts from "./assets/fonts/fonts";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./Pages/Profile/Profile";
import { style } from "./Theme";
import styled, { ThemeProvider } from "styled-components";
import { data } from "./db/db";

const theme = {
  main: {...style.themes.main},
  dark: {...style.themes.dark}
}

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <Router>
      <GlobalFonts />
      <ThemeProvider theme={theme.dark}>
        <Navbar />
        <Switch>
          <Route
            path="/"
            component={(props) => <Home {...props} isAuth={isAuth} />}
            exact
          />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/hiraganas" render={props => <Hiraganas {...props} list={data.hiraganas} /> } exact />
          <Route path="/products/:id" component={ProductDetails} exact />
          <Route
            path="/login"
            render={(props) => <Login {...props} login={setIsAuth} />}
            exact
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            isAuth={isAuth}
            exact
          />

          <Route path="*" component={PageNotFound} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

const StyledBtn = styled.button`
  background: ${(props)=> props.theme.colors.secondary};
  padding: 10px 20px;
  border: none;
  border-radius:5px;
  color: ${style.shared.colors.white};
  cursor: pointer;
  transition: 0.3s all;

  &:hover{ 
    transform: scale(1.1)
  }
  
`

export default App;
