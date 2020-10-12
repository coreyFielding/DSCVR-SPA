import React, { useContext, useEffect } from "react";
import Sidebar from "../../src/Layout/Components/Sidebar/index";
import SidebarLink from "./Components/Sidebar/NavLink";
import { Switch } from "react-router-dom";
import { useViewport } from "../providers/Viewport";
import { UserProvider } from "../components/App";

const loading = <div className="pt-3">Loading</div>;

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
  return (
    <div className="flex flex-row">
      {user && (
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
          left: `${user ? "200px" : 0}`,
          width: `${user ? "calc(100% - 200px)" : "100%"}`,
          overflowX: "hidden",
        }}
      >
        <React.Suspense fallback={loading}>
          <Switch>{renderViews(children.flat())}</Switch>
        </React.Suspense>
      </main>
    </div>
  );
};

export default Layout;
