import React from "react";
import PropTypes from 'prop-types';

const SIZES = {
  threeQuarter: "col-sm-8",
  quarter: "col-sm-4",
  half: "col-sm-6",
};

function Widget({ children, title, size = 'quarter' }) {
  return (
    <div className={SIZES[size]}>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
        </div>
        <div className="card-body">
          {children}
        </div>
      </div>
    </div>
  );
}

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['quarter', 'threeQuarter', 'half']),
};

export default Widget;
