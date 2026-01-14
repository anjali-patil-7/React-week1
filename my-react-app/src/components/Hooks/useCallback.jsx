//basic syntax
// const memoizedFunction = useCallback(() => {
//   // logic
// }, [dependencies]);

//1.....counter app
import React from "react";

const CounterButton = React.memo(({ onClick }) => {
  console.log("Button re-rendered");
  return <button onClick={onClick}>Increment</button>;
});

export default CounterButton;
