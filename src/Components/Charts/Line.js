import React from "react";
import { Line as Chart, defaults } from 'react-chartjs-2';
import { format } from "currency-formatter";
import PropTypes from "prop-types";

defaults.global.defaultFontFamily = 'Nunito';

const CurrencyFormatter = value => format(value, { code: 'USD', precision: 0 });

const DEFAULT_DATA = {
  datasets: [{
    lineTension: 0.3,
    backgroundColor: "rgba(78, 115, 223, 0.05)",
    borderColor: "rgba(78, 115, 223, 1)",
    pointRadius: 3,
    pointBackgroundColor: "rgba(78, 115, 223, 1)",
    pointBorderColor: "rgba(78, 115, 223, 1)",
    pointHoverRadius: 3,
    pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
    pointHoverBorderColor: "rgba(78, 115, 223, 1)",
    pointHitRadius: 10,
    pointBorderWidth: 2,
  }],
};

const DEFAULT_OPTIONS = {
  maintainAspectRatio: false,
  layout: {
    padding: {},
  },
  scales: {
    xAxes: [{
      time: {
        unit: 'date'
      },
      gridLines: {
        display: false,
        drawBorder: false
      },
    }],
    yAxes: [{
      ticks: {
        maxTicksLimit: 5,
        padding: 10,
        callback: CurrencyFormatter,
      },
      gridLines: {
        color: "#f0f0f0",
        zeroLineColor: "rgb(234, 236, 244)",
        drawBorder: false,
      }
    }],
  },
  legend: {
    display: false
  },
  tooltips: {
    backgroundColor: "rgb(255,255,255)",
    bodyFontColor: "#858796",
    titleMarginBottom: 10,
    titleFontColor: '#6e707e',
    titleFontSize: 14,
    borderColor: '#dddfeb',
    borderWidth: 1,
    xPadding: 15,
    yPadding: 15,
    displayColors: false,
    intersect: false,
    mode: 'index',
    caretPadding: 10,
    callbacks: {
      label: function(tooltipItem, chart) {
        const datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
        return `${datasetLabel} ${CurrencyFormatter(tooltipItem.yLabel)}`;
      }
    }
  }
};

function Line({ title, labels, data, addPadding }) {
  DEFAULT_DATA.labels = labels;
  DEFAULT_DATA.datasets[0].label = title;
  DEFAULT_DATA.datasets[0].data = data;
  DEFAULT_OPTIONS.layout.padding = !addPadding ? {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  } : {
    left: 10,
    right: 25,
    top: 25,
    bottom: 0,
  };

  return (
    <div className="chart-area">
      <Chart data={DEFAULT_DATA} options={DEFAULT_OPTIONS} />
    </div>
  );
}

Line.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
};

export default Line;
