import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
  NavLink,
} from "react-router-dom";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
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
                to="/formik-basic"
                className={({ isActive }: any) =>
                  isActive ? "nav-active" : ""
                }
              >
                Formic Basic
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
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="users" element={<h1>Users</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
