import React, { forwardRef, useImperativeHandle, useState } from "react";
import { random } from "lodash";

import Line from "../Charts/Line";
import Widget from "./Widget";
import Doughnut from "../Charts/Doughnut";
import Bar from "../Charts/Bar";

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

const REVENUE_SOURCES = ["Direct", "Referral", "Social"];
const DIRECTORS = ["Aadya", "Sinead", "Palash", "Conor", "Jordi"];
const TEAMS = ["Sales", "Marketing", "HR", "IT"];

function Widgets({ isMobile }, ref) {
  const [earnings, setEarnings] = useState([
    0, 10000, 5000, 15000, 10000, 20000,
    15000, 25000, 20000, 30000, 25000, 40000
  ]);
  const [revenueSources, setRevenueSources] = useState([55, 30, 15]);
  const [directorsPerformance, setDirectorsPerformance] = useState([50, 70, 33, 81, 60]);
  const [teamsPerformance, setTeamsPerformance] = useState([60, 42, 78, 89]);

  useImperativeHandle(ref, () => ({
    randomize() {
      setEarnings(MONTHS.map(() => random(0, 60000)));
      setDirectorsPerformance(DIRECTORS.map(() => random(0, 100)));
      setTeamsPerformance(TEAMS.map(() => random(0, 100)));

      let maxRevenueSource = 100;

      const newRevenueSources = REVENUE_SOURCES.map((r, i) => {
        if (i === REVENUE_SOURCES.length - 1) {
          return maxRevenueSource;
        }

        const newRevenueSource = random(0, maxRevenueSource);
        maxRevenueSource -= newRevenueSource;

        return newRevenueSource;
      });

      setRevenueSources(newRevenueSources);
    }
  }));

  return (
    <div className="row">
      <Widget title="Earnings Overview" size={"threeQuarter"}>
        <Line
          addPadding={!isMobile}
          title="Earnings"
          labels={MONTHS}
          data={earnings} />
      </Widget>
      <Widget title="Revenue Sources" size={"quarter"}>
        <Doughnut labels={REVENUE_SOURCES} data={revenueSources} />
      </Widget>
      <Widget title="Directors Performance" size={"half"}>
        <Bar
          title="Directors Performance"
          labels={DIRECTORS}
          data={directorsPerformance} />
      </Widget>
      <Widget title="Teams Performance" size={"half"}>
        <Bar
          title="Teams Performance"
          labels={TEAMS}
          data={teamsPerformance} />
      </Widget>
    </div>
  );
}

export default forwardRef(Widgets);
