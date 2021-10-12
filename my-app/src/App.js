import "./App.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./components/loginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" render={() => <LoginPage />} />
      <Route
        exact
        path="/"
        // Есть вариант сделать через атрибут component
        render={() => (
          <div className="app">
            <Header />
            <Content />
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
