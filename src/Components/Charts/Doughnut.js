import React from "react";
import { Doughnut as Chart } from "react-chartjs-2";

const DEFAULT_DATA = {
  labels: ["Direct", "Referral", "Social"],
  datasets: [{
    data: [55, 30, 15],
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

function Doughnut() {
  return (
    <>
      <div className="chart-pie">
        <Chart data={DEFAULT_DATA} options={DEFAULT_OPTIONS} />
      </div>
      <div className="mt-4 text-center small">
          <span className="mr-2">
            <i className="fas fa-circle text-primary" /> Direct
          </span>
        <span className="mr-2">
          <i className="fas fa-circle text-success" /> Social
        </span>
        <span className="mr-2">
          <i className="fas fa-circle text-info" /> Referral
        </span>
      </div>
    </>
  );
}

export default Doughnut;
