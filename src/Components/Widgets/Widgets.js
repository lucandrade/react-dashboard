import React, { forwardRef, useImperativeHandle, useState } from "react";
import { random } from "lodash";

import Line from "../Charts/Line";
import Widget from "./Widget";
import Doughnut from "../Charts/Doughnut";

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

function Widgets({ isMobile }, ref) {
  const [earnings, setEarnings] = useState([
    0, 10000, 5000, 15000, 10000, 20000,
    15000, 25000, 20000, 30000, 25000, 40000
  ]);

  useImperativeHandle(ref, () => ({
    randomize() {
      const newEarnings = MONTHS.map(() => random(0, 900000));
      setEarnings(newEarnings);
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
        <Doughnut />
      </Widget>
    </div>
  );
}

export default forwardRef(Widgets);
