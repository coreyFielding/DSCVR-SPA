import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { LOGOUT } from "../../../redux/actions/auth/index";
import { Avatar } from "antd";
import { Sidebar, Header, Footer, Toggle, Body } from "./sidebarStyles";
import { AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { useViewport } from "../../../providers/Viewport";
import ThemeToggle from "../../../components/Themes/Toggler";
import { useDarkMode } from "../../../components/Themes/useDarkMode";

interface ISidebar {
  width: number;
  height: number | string;
  tablet: boolean;
  children: any;
}

const SidebarHeader = () => {
  const { device } = useViewport();

  return (
    <Header className="border border-l-0 border-r-0 border-t-0">
      <button
        className={`absolute top-0 left-0 ${
          device === "tablet" ? "p-3" : "p-2"
        }`}
      >
        <AiOutlineSetting />
      </button>
      <Avatar size="large" icon={<AiOutlineUser />} />

      <div className="flex justify-center items-center flex-col text-center">
        {device === "tablet" ? null : (
          <>
            <span className="font-bold">Corey Fielding</span>
            <span className="font-hairline">corey@dscvr-app.com</span>
          </>
        )}
      </div>
    </Header>
  );
};

const SidebarFooter = () => {
  const [theme, setTheme] = useDarkMode();
  const dispatch = useDispatch();

  return (
    <Footer>
      <ThemeToggle toggleTheme={setTheme} />
      <button onClick={() => dispatch(LOGOUT())}>LOGOUT</button>
    </Footer>
  );
};

const SidebarMain: React.FunctionComponent<{
  width: number;
  height: number | string;
  children: any;
}> = ({ width, height, children }: ISidebar) => {
  const { device } = useViewport();
  const [xPos, setX] = useState(width);

  const toggleSidebar = () => {
    if (xPos < 0) setX(0);
    else setX(width);
  };

  return (
    <>
      <Sidebar
        className="sidebar flex flex-col border border-l-0"
        width={width}
        min-height={height}
      >
        {device === "mobile" ? (
          <Toggle
            onClick={() => toggleSidebar()}
            style={{ transform: `translate(${xPos}px, 50vh)` }}
          />
        ) : null}

        <SidebarHeader />

        <Body>{children}</Body>
        <SidebarFooter />
      </Sidebar>
    </>
  );
};

export default connect()(SidebarMain);
