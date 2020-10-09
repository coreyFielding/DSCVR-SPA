import React from "react";
import Account from "./Account";
import Permissions from "./Permissions";
import Profile from "./Profile";
import { Tabs } from "antd";
import { TabContainer } from "./styles";

const { TabPane } = Tabs;
const ManageUsers = () => {
  return (
    <TabContainer>
      <Tabs className="bg-white">
        <TabPane tab="Profile" key="profile">
          <Profile />
        </TabPane>
        <TabPane tab="Account" key="account">
          <Account />
        </TabPane>
        <TabPane tab="Permissions" key="permissions">
          <Permissions />
        </TabPane>
      </Tabs>
    </TabContainer>
  );
};

export default ManageUsers;
