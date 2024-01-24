import * as React from 'react';
import {useInterval} from "@/pages/solved/hooks/hooks";
import classes from "@/pages/solved/hooks/styles.module.css";

const Interval = () => {
  const [count, setCount] = React.useState(0);
  const [delay, setDelay] = React.useState(1000);
  const [isRunning, setIsRunning] = React.useState(true);

  useInterval(() => {
    setCount(count + 1);
  }, isRunning ? delay : null);

  return (<div className={classes.main}>
    <div>
      delay: <input value={delay} onChange={event => setDelay(Number(event.target.value))}/>
    </div>
    <h1>count: {count}</h1>
    <div>
      <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'stop' : 'start'}</button>
    </div>
  </div>);
};

export default Interval;
