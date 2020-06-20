import React, { forwardRef, useImperativeHandle, useState } from "react";
import { format } from 'currency-formatter';
import { random } from 'lodash';

import Stat from "./Stat";

const CurrencyFormatter = value => format(value, { code: 'USD', precision: 0 });

function Stats(props, ref) {
  const [monthlyEarnings, setMonthlyEarnings] = useState(40000);
  const [annualEarnings, setAnnualEarnings] = useState(125000);
  const [tasks, setTasks] = useState(50);
  const [pendingRequests, setPendingRequests] = useState(18);

  useImperativeHandle(ref, () => ({
    randomize() {
      const earnings = random(10000, 50000);
      setMonthlyEarnings(earnings);
      setAnnualEarnings(earnings * random(3, 7));
      setTasks(random(5, 100));
      setPendingRequests(random(5, 50));
    }
  }));

  return (
    <div className="row">
      <Stat
        title="Earnings (Monthly)"
        content={CurrencyFormatter(monthlyEarnings)}
        icon="fa-calendar"
        type="primary" />
      <Stat
        title="Earnings (Annual)"
        content={CurrencyFormatter(annualEarnings)}
        icon="fa-dollar-sign"
        type="success" />
      <Stat
        withProgress
        progress={tasks}
        title="Tasks"
        content={`${tasks}%`}
        icon="fa-clipboard-list"
        type="info" />
      <Stat
        title="Pending Requests"
        content={pendingRequests}
        icon="fa-comments"
        type="warning" />
    </div>
  );
}

export default forwardRef(Stats);
