import React from "react";
import "./header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, onChange] = useState("");
  const [time, onChangeTime] = useState("");

  const date = new Date();

  setInterval(function () {
    today();
  }, 1000);

  setInterval(function () {
    todayTime();
  }, 1000);

  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()} `
    );
  };

  const todayTime = () => {
    onChangeTime(
      ` ${date.toLocaleString("en-US", {
        hour: "numeric",

        minute: "numeric",

        // second: "numeric",

        hour12: true,
      })}`
    );
  };
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={require("../../assests/logo_web.png")} alt="logo" />
        </div>
        <form className="header-search">
          <input
            type="text"
            className="input-search"
            placeholder="Search City"
          />
          <div className="search-icon">
            <img
              src={require("../../assests/icon_search_white.png")}
              alt="search_icon"
              className="h-search-icon"
            />
          </div>
        </form>
      </div>
      <div className="home-nav">
        <div className="section-1">
          <NavLink to="/" className="list1">
            HOME
          </NavLink>
          <NavLink to="/" className="list1">
            FAVORITE
          </NavLink>
          <NavLink to="/" className="list1">
            RECENT SEARCH
          </NavLink>
        </div>
        <div className="date">
          {value}&nbsp;&nbsp;{time}
        </div>
      </div>
    </>
  );
};

export default Header;
