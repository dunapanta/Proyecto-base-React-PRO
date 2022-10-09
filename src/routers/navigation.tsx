import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
  NavLink,
} from "react-router-dom";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }: any) =>
                  isActive ? "nav-active" : ""
                }
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }: any) =>
                  isActive ? "nav-active" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }: any) =>
                  isActive ? "nav-active" : ""
                }
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="users" element={<h1>Users</h1>} />
          <Route path="home" element={<h1>Home</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
