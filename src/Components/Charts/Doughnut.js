import React from "react";
import { Doughnut as Chart } from "react-chartjs-2";
import RandomColor from 'randomcolor';
import Color from 'color';
import PropTypes from "prop-types";

const DEFAULT_DATA = {
  datasets: [{
    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
    hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
    hoverBorderColor: "rgba(234, 236, 244, 1)",
  }],
};

const DEFAULT_OPTIONS = {
  maintainAspectRatio: false,
  tooltips: {
    backgroundColor: "rgb(255,255,255)",
    bodyFontColor: "#858796",
    borderColor: '#dddfeb',
    borderWidth: 1,
    xPadding: 15,
    yPadding: 15,
    displayColors: false,
    caretPadding: 10,
  },
  legend: {
    display: false
  },
  cutoutPercentage: 80,
};

function Doughnut({ labels, data }) {
  DEFAULT_DATA.labels = labels;
  DEFAULT_DATA.datasets[0].data = data;

  const backgroundColors = RandomColor({
    count: labels.length,
    hue: 'random',
  });

  const hoverBackgroundColors = backgroundColors.map(c => Color(c).darken(0.3).string());

  DEFAULT_DATA.datasets[0].backgroundColor = backgroundColors;
  DEFAULT_DATA.datasets[0].hoverBackgroundColor = hoverBackgroundColors;

  return (
    <>
      <div className="chart-pie">
        <Chart data={DEFAULT_DATA} options={DEFAULT_OPTIONS} />
      </div>
      <div className="mt-4 text-center small">
        {labels.map((label, i) => (
          <span key={label} className="mr-2">
            <i className="fas fa-circle" style={{ color: backgroundColors[i] }} />
            {` ${label} (${data[i]})`}
          </span>
        ))}
      </div>
    </>
  );
}

Doughnut.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Doughnut;
