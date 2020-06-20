import React from "react";

export default function PageTitle({ onRandomize }) {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      <button
        type="button"
        className="d-none d-sm-inline-block btn btn-primary shadow-sm"
        onClick={onRandomize}>
        Randomize <i className="fas fa-random fa-sm text-white-50 align-middle" />
      </button>
      <button
        type="button"
        className="d-inline-block d-sm-none btn btn-primary btn-xs shadow-sm"
        onClick={onRandomize}>
        Randomize <i className="fas fa-random fa-sm text-white-50 align-middle" />
      </button>
    </div>
  );
}
