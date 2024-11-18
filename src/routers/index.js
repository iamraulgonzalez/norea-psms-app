import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";

export const menuItems = [
  {
    key: "/",
    icon: <LuLayoutDashboard style={{ fontSize: "22px", color: "gray" }} />,
    label: "Dashboard",
    roles: ["user", "admin", "super_admin"],
  },
  {
    key: "/studnets",
    icon: <GoPeople style={{ fontSize: "22px", color: "gray" }} />,
    label: "Students",
    roles: ["user", "admin", "super_admin"],
  },
  {
    key: "/settings",
    icon: <IoSettingsOutline style={{ fontSize: "22px", color: "gray" }} />,
    label: "Settings",
    roles: ["admin", "super_admin"],
  },
];
