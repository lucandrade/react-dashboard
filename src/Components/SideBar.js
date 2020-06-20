import React from "react";

export default function SideBar({ opened }) {
  return (
    <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${!opened ? 'toggled' : ''}`}>
      <span className="hover sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </span>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active hover">
        <span className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span> Dashboard</span>
        </span>
      </li>
      <hr className="sidebar-divider my-0" />
    </ul>
  );
}
