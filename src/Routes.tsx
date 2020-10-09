import React from "react";
import { AiOutlineTag } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineExclamation } from "react-icons/ai";
import { AiOutlineApartment } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

interface IRoute {
  path: string;
  name: string;
  title?: string;
  exact?: boolean;
  sidebar?: any;
  component: any;
  icon?: any;
}

const components = {
  Login: React.lazy(() => import("./views/Login")),
  Dashboard: React.lazy(() => import("./views/Dashboard/index")),
  AddPromotion: React.lazy(() => import("./views/AddPromotion/index")),
  ActivePromotions: React.lazy(() => import("./views/ActivePromotions/index")),
  SuspendedPromotions: React.lazy(
    () => import("./views/SuspendedPromotions/index")
  ),
  ManageOrganisations: React.lazy(() => import("./views/Organisations/index")),
  ManageLocations: React.lazy(() => import("./views/Locations/index")),
  ManageUsers: React.lazy(() => import("./views/Users/index")),
};

const Routes: IRoute[] = [
  {
    path: "/login",
    name: "Login",
    component: components["Login"],
  },
  {
    path: "/active",
    name: "Active",
    title: "Active Promotions",
    icon: <AiOutlineTag />,
    sidebar: "Active Promotions",
    component: components["ActivePromotions"],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    sidebar: "Dashboard",
    component: components["Dashboard"],
  },
  {
    path: "/add",
    name: "AddPromotion",
    title: "Add Promotion",
    icon: <AiOutlinePlus />,
    sidebar: "Add Promotion",
    component: components["AddPromotion"],
  },
  {
    path: "/suspended",
    name: "SuspendedPromotions",
    title: "Suspended Promotions",
    icon: <AiOutlineExclamation />,
    sidebar: "Suspended Promotions",
    component: components["SuspendedPromotions"],
  },
  {
    path: "/organisations",
    name: "ManageOrganisations",
    title: "Manage Organisations",
    icon: <AiOutlineApartment />,
    sidebar: "Manage Organisations",
    component: components["ManageOrganisations"],
  },
  {
    path: "/locations",
    name: "ManageLocations",
    title: "Manage Locations",
    icon: <AiOutlineShop />,
    sidebar: "Manage Locations",
    component: components["ManageLocations"],
  },
  {
    path: "/users",
    name: "ManageUsers",
    title: "Manage Users",
    icon: <AiOutlineUser />,
    sidebar: "Manage Users",
    component: components["ManageUsers"],
  },
];

export default Routes;
