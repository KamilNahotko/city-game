import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./theme/GlobalStyle";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import UserSettingsPage from "./pages/UserSettingsPage";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/user-page" component={UserPage} />
        <Route exact path="/user-settings" component={UserSettingsPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
