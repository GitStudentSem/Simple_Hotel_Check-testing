import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import LoginPage from "./components/loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
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
        {/* Если адрес не верный то реконнект на главную */}
        {/* <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
