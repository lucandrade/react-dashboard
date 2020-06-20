import React, { forwardRef, useImperativeHandle, useState } from "react";
import { random } from "lodash";

import Line from "../Charts/Line";
import Widget from "./Widget";
import Doughnut from "../Charts/Doughnut";

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

const REVENUE_SOURCES = ["Direct", "Referral", "Social"];

function Widgets({ isMobile }, ref) {
  const [earnings, setEarnings] = useState([
    0, 10000, 5000, 15000, 10000, 20000,
    15000, 25000, 20000, 30000, 25000, 40000
  ]);
  const [revenueSources, setRevenueSources] = useState([55, 30, 15]);

  useImperativeHandle(ref, () => ({
    randomize() {
      const newEarnings = MONTHS.map(() => random(0, 60000));
      setEarnings(newEarnings);
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
    </div>
  );
}

export default forwardRef(Widgets);
