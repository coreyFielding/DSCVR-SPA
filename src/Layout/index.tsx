import React, { useContext } from "react";
import Sidebar from "../../src/Layout/Components/Sidebar/index";
import SidebarLink from "./Components/Sidebar/NavLink";
import { Router, Route, Switch } from "react-router-dom";
import { useViewport } from "../providers/Viewport";
import { UserProvider } from "../components/App";
import history from "../helpers/history";

const loading = <div className="pt-3"></div>;

const renderLinks = (children: any) => {
  return children
    .slice(1)
    .map((child: any, index: number) => (
      <SidebarLink key={`link-${index}`} {...child.props} />
    ));
};

const renderViews = (children: any) => {
  return <>{...children}</>;
};

const Layout: React.FC = ({ children }: any) => {
  const { device } = useViewport();
  const { user } = useContext(UserProvider);

  const open = history.location.pathname !== "/login";
  return (
    <div className="flex flex-row">
      <Router history={history}>
        {open && user && (
          <Sidebar
            width={device === "mobile" ? 0 : device === "tablet" ? 40 : 200}
            height={"100vh"}
          >
            {renderLinks(children.flat())}
          </Sidebar>
        )}

        <main
          style={{
            position: "relative",
            left: `${open ? "200px" : 0}`,
            width: `${open ? "calc(100% - 200px)" : "100%"}`,
            overflowX: "hidden",
          }}
        >
          <React.Suspense fallback={loading}>
            <Switch>{renderViews(children.flat())}</Switch>
          </React.Suspense>
        </main>
      </Router>
    </div>
  );
};

export default Layout;
