import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
  NavLink,
} from "react-router-dom";
import { RegisterPage } from "../03-forms/pages/RegisterPage";

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
                to="/register"
                className={({ isActive }: any) =>
                  isActive ? "nav-active" : ""
                }
              >
                Register Page
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
          <Route path="about" element={<h1>About</h1>} />
          <Route path="users" element={<h1>Users</h1>} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
