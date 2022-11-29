import React, { useState, useEffect } from "react";

// 바보 멍청아 자식 컴포넌트는 밖에 써야지...
const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  } else {
    return false;
  }
};

const MemorizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  // state
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemorizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>A button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
