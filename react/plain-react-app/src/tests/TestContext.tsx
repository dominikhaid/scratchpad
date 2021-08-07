import React, { MouseEventHandler } from 'react';


type CounterType = {
  counter:number,
  increment:MouseEventHandler,
  decrement:MouseEventHandler
}

const CounterProp =  {
  counter : 0,
  increment:()=>true,
  decrement:()=>true
}


export const CounterContext = React.createContext<CounterType>(CounterProp);

export const Counter = ():React.ReactElement => {
  const {counter, increment, decrement} = React.useContext(CounterContext);
  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={increment}>
        Up
      </button>
      <button data-testid="button-down" onClick={decrement}>
        Down
      </button>
    </>
  );
};

const CounterProvider = ():React.ReactNode => {
  const [counter, setCounter] = React.useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider value={{counter, increment, decrement}}>
      <Counter  />
    </CounterContext.Provider>
  );
};

export default CounterProvider;
