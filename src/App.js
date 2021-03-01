import RouterView from "./router";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom"
import About from "./views/About";
import Home from "./views/Home";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to="/home">首页</Link>
                <Link to="/about">关于</Link>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
