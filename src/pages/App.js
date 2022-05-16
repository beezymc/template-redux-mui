import React from 'react';

const App = ({ count, incrementCount, decrementCount, resetCount }) => {
  return (
    <div>
      {count}
      <button onClick={() => (incrementCount(count))}>+</button>
      <button onClick={() => (decrementCount(count))}>-</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
