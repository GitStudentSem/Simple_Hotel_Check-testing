import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import LoginPage from "./components/loginPage/LoginPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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
