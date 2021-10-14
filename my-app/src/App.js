import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import LoginPage from "./components/loginPage/LoginPage";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <LoginPage />} />
        <Route
          path="/main"
          // Есть вариант сделать через атрибут component
          render={() => (
            <div className="app">
              <Header />
              <Content />
            </div>
          )}
        />
        {/* Если адрес не верный то реконнект на главную, но нужно настроить логиназацию */}
        {/* <Redirect to="/" /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;
