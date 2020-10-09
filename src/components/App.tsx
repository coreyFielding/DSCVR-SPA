import React, { useEffect } from "react";
import Layout from "../Layout/index";
import View from "../views";
import { ViewportProvider, useViewport } from "../providers/Viewport";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Themes/useDarkMode";
import { GlobalStyles } from "./Themes/globalStyles";
import { lightTheme, darkTheme } from "./Themes/Themes";
import Routes from "../Routes";
import { Route, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";
import { FETCH_TRIBES } from "../redux/actions/tribes";

const ProtectedRoute = ({ user, ...props }: any) => {
  const isAuthed = !!user;
  return isAuthed ? (
    <Route path={props.path} exact render={() => <View {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
};

const App = ({ user }: any) => {
  console.log(user);
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FETCH_TRIBES({ type: "tribes", query: { limit: 100 } }));
  }, []);

  return (
    <ViewportProvider>
      <ThemeProvider theme={themeMode}>
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
      </ThemeProvider>
    </ViewportProvider>
  );
};

interface IPropsState {
  user: any;
  tribes: any;
}
const mapStateToProps = (state: RootState) => ({
  user: state.auth,
  tribes: state.tribes,
});
export default connect<IPropsState>(mapStateToProps)(App);
