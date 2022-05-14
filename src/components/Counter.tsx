import { counterMachine } from "@utils/counterMachine";
import { useMachine } from "@xstate/react";
import React from "react";

const Counter = () => {
  const [{ context }, send] = useMachine(counterMachine, { devTools: true });
  const test = {
    id: "1",
    name: "Muktadir",
  };
  return (
    <section>
      <output>{context.count}</output>
      <button onClick={() => send("INCREMENT")}>Count</button> <br />
      <button onClick={() => send("ADD", { payload: test })}>Add</button>
    </section>
  );
};

export default Counter;
