import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AppTitle = ({ collapsed }) => {
  const { t } = useTranslation();

  return (
    <Link to="/">
      <div
        className={`flex flex-col ${
          collapsed
            ? "justify-center pt-2"
            : "pt-2 text-center flex-row justify-center"
        } cursor-pointer items-center`}
      >
        <img
          src={require("../assets/images/app_logo.png")}
          width={collapsed ? 50 : 80}
          alt="eco logo"
        />
        <p className="font-kantumruy text-base mt-2">សាលាបឋមសិក្សានរា</p>
      </div>
    </Link>
  );
};

export default AppTitle;
