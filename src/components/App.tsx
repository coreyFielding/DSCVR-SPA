import React, { createContext, useEffect } from "react";
import Layout from "../Layout/index";
import View from "../views";
import { ViewportProvider, useViewport } from "../providers/Viewport";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Themes/useDarkMode";
import { GlobalStyles } from "./Themes/globalStyles";
import { lightTheme, darkTheme } from "./Themes/Themes";
import Routes from "../Routes";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../redux/reducers";
import axios from "axios";
import history from "../helpers/history";

export const UserProvider = createContext(undefined);

const ProtectedRoute = ({ user, ...props }: any) => {
  const isAuthed = user;
  return isAuthed ? (
    <Route path={props.path} exact render={() => <View {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
};

const App = ({ user, location }: any) => {
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    axios.interceptors.request.use((config) => {
      return config;
    });
  }, [location]);

  return (
    <ViewportProvider>
      <ThemeProvider theme={themeMode}>
        <UserProvider.Provider value={{ user }}>
          <GlobalStyles />
          <Layout>
            {Routes.slice(1).map((route: any, index: number) => (
              <ProtectedRoute
                user={user}
                key={index}
                exact={route.exact}
                path={route.path}
                name={route.name}
                icon={route.icon}
                sidebar={route.sidebar}
                component={route.component}
                title={route.title}
              />
            ))}
            <Route path={Routes[0].path} component={Routes[0].component} />
          </Layout>
        </UserProvider.Provider>
      </ThemeProvider>
    </ViewportProvider>
  );
};

interface IPropsState {
  user: any;
}
const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
});
export default withRouter(connect<IPropsState>(mapStateToProps)(App));
