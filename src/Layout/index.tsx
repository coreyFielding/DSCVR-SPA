import React from "react";
import Sidebar from "../../src/Layout/Components/Sidebar/index";
import SidebarLink from "./Components/Sidebar/NavLink";
import { Router, Route, Switch } from "react-router-dom";
import { useViewport } from "../providers/Viewport";
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

const Layout: React.FunctionComponent = ({ children }: any) => {
  const { device } = useViewport();
  const open = history.location.pathname !== "/login";
  return (
    <div className="flex flex-row">
      <Router history={history}>
        {open && (
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
            left: "200px",
            width: "calc(100% - 200px)",
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
