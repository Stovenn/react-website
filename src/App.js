import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, AboutUs, Products, PageNotFound, ProductDetails } from "./Pages";
import { Navbar } from "./components/Navbar/Navbar";
import GlobalFonts from "./assets/fonts/fonts"

function App() {
  return (
    <Router>
    <GlobalFonts />
      <div >
        <Navbar>
          <Link to="/">Home</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/products">Products</Link>
        </Navbar>
      </div>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/products" component={Products} exact />
        <Route path="/products/:id" component={ProductDetails} exact />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
