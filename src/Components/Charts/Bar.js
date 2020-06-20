import React from "react";
import { Bar as Chart } from "react-chartjs-2";
import RandomColor from "randomcolor";
import Color from "color";

const DEFAULT_OPTIONS = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      display: true,
      ticks: {
        maxTicksLimit: 10,
        suggestedMin: 0,
        suggestedMax: 100,
        callback: value => `${value}%`,
      },
    }]
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
    caretPadding: 10,
    callbacks: {
      label: (tooltipItem, chart) => {
        const datasetLabel = chart.datasets[tooltipItem.datasetIndex].label;
        return `${datasetLabel} - ${tooltipItem.yLabel}%`;
      }
    },
  }
};

function Bar({ title, labels, data }) {
  const backgroundColors = RandomColor({
    count: labels.length,
    hue: 'random',
  });

  DEFAULT_OPTIONS.tooltips.callbacks.title = () => title;

  const datasets = labels.map((label, i) => {
    return {
      label,
      backgroundColor: backgroundColors[i],
      borderColor: backgroundColors[i],
      hoverBackgroundColor: Color(backgroundColors[i]).darken(0.3).string(),
      hoverBorderColor: Color(backgroundColors[i]).darken(0.3).string(),
      borderWidth: 1,
      data: [data[i]]
    };
  });

  return (
    <div className="chart-area">
      <Chart data={{ datasets }} options={DEFAULT_OPTIONS} />
    </div>
  );
}

export default Bar;
