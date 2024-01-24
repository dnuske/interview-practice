import {useState} from "react";
import {useDebounce} from "@/pages/solved/hooks/hooks";
import classes from "./styles.module.css";

const Debounce = () => {
  const [state, setState] = useState('Typing stopped');
  const [val, setVal] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const [, cancel] = useDebounce(
    () => {
      setState('Typing stopped');
      setDebouncedValue(val);
    },
    2000,
    [val]
  );

  return (
    <div className={classes.main}>
      <input
        type="text"
        value={val}
        placeholder="Debounced input"
        onChange={({currentTarget}) => {
          setState('Waiting for typing to stop...');
          setVal(currentTarget.value);
        }}
      />
      <div>{state}</div>
      <div>
        Debounced value: {debouncedValue}
        <button onClick={cancel}>Cancel debounce</button>
      </div>
    </div>
  );
};

export default Debounce;
